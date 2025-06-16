import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { RedisService } from 'src/redis/redis.service';
import { generateHash } from 'src/common/utils/hash.utils';
import { SignupDto } from 'src/auth/dto/requests/sign-up.dto';
import { InjectQueue } from '@nestjs/bullmq';
import { QUEUE_NAME } from 'src/common/constants/queues.name';
import { Queue } from 'bullmq';
import { Optional } from 'src/common/types/optional.type';
import { JOB_NAME } from 'src/common/constants/jobs.name';
import { omit } from 'lodash';
import { LOGGER } from 'src/common/constants/logger.name';
@Injectable()
export class UserService {
  logger = new Logger(LOGGER.USER);
  constructor(
    @InjectRepository(User)
    private userRepositry: Repository<User>,
    private redisService: RedisService,
    private dataSource: DataSource,
    @InjectQueue(QUEUE_NAME.MAIL_QUEUE) private readonly mailQueue: Queue,
  ) {}

  static getUserCacheKey(criterion: string | number): string {
    return `user:${criterion}`;
  }

  async create(createUser: SignupDto): Promise<User> {
    const hashedPassword = await generateHash(createUser.password);
    const newUser = await this.userRepositry.save({
      ...createUser,
      password: hashedPassword,
    });
    if (!newUser)
      throw new ConflictException('there is an error in saving the user');
    return newUser;
  }

  async findByPagination(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    const [data, total] = await this.userRepositry.findAndCount({
      skip,
      take: limit,
      order: { id: 'ASC' },
    });
    if (!data) throw new NotFoundException('the users not found');
    const result = { data, total, page, limit };
    return result;
  }

  async findOne(id: number): Promise<User> {
    const cachedUser = await this.redisService.get<User>(
      UserService.getUserCacheKey(id),
    );
    if (cachedUser) return cachedUser;

    const userFound = await this.userRepositry.findOneById(id);
    if (!userFound) {
      throw new NotFoundException('the user does not exist');
    }
    await this.redisService.set<User>(`user_${id}`, userFound);
    return userFound;
  }

  async findOneByEmail(email: string): Promise<User> {
    const cacheKey = UserService.getUserCacheKey(email);
    const cachedUser = await this.redisService.get<User>(cacheKey);
    if (cachedUser) return cachedUser;

    const userFound = await this.userRepositry.findOne({ where: { email } });
    if (!userFound)
      throw new NotFoundException(
        `the user with email ${email} does not exist`,
      );
    await this.redisService.set(cacheKey, JSON.stringify(userFound), 600);
    return userFound;
  }

  async update(id: number, updateUserData: UpdateUserDto): Promise<User> {
    const updatedUser = await this.userRepositry.save({
      ...updateUserData,
      id,
    });
    if (!updatedUser)
      throw new BadRequestException(`User with ID ${id} not updated`);
    await this.redisService.set<User>(`user_${id}`, updatedUser);
    return updatedUser;
  }

  async bulkCreate(
    users: Optional<SignupDto, 'password'>[],
    options: {
      skipDuplicates: boolean;
      tempPassword: boolean;
      welcomeEmail: boolean;
    },
  ): Promise<{ inserted: number }> {
    const { skipDuplicates, tempPassword, welcomeEmail } = options;

    if (!tempPassword) {
      const firstUserWithoutPassword = users.find((user) => !user?.password);
      if (firstUserWithoutPassword) {
        throw new ConflictException(
          `Password missing for some users with email and tempPassword option is false`,
        );
      }
    }

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const userRepo = queryRunner.manager.getRepository(User);

    try {
      const existingUsers = await this.findExistingUsers(userRepo, users);

      const existingEmails = new Set(
        existingUsers.map((u: User): string => u.email),
      );
      const existingPhones = new Set(
        existingUsers.map((u: User): string => u.phoneNumber).filter(Boolean),
      );

      const processedEmails = new Set<string>();
      const processedPhones = new Set<string>();

      const validUsers: (User & { tempPass: string })[] = [];

      for (const dto of users) {
        const emailExists =
          existingEmails.has(dto.email) || processedEmails.has(dto.email);
        const phoneExists =
          existingPhones.has(dto.phoneNumber) ||
          processedPhones.has(dto.phoneNumber);
        if (emailExists || phoneExists) {
          if (skipDuplicates) {
            continue;
          } else {
            throw new ConflictException(
              `User with email ${dto.email} or phone number ${dto.phoneNumber} already exists`,
            );
          }
        }

        processedEmails.add(dto.email);
        if (dto.phoneNumber) {
          processedPhones.add(dto.phoneNumber);
        }

        const tempPass = tempPassword
          ? this.generateTempPassword()
          : dto?.password;
        if (!tempPass)
          throw new ConflictException(
            `Password missing for some users with email and tempPassword option is false`,
          );
        const user = userRepo.create({
          ...dto,
          password: tempPass,
        });

        validUsers.push({ ...user, tempPass });
      }

      const savedUsers =
        validUsers.length > 0 ? await userRepo.save(validUsers) : [];

      await queryRunner.commitTransaction();

      if (welcomeEmail && savedUsers.length > 0) {
        this.mailQueue
          .add(
            JOB_NAME.SEND_WELCOME_EMAIL,
            savedUsers.map((user) =>
              omit(user, ['department', 'year', 'role', 'yearGroup']),
            ),
          )
          .catch((error) => {
            this.logger.error('Failed to queue welcome emails:', error);
          });
      }

      return { inserted: savedUsers.length };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
  private async findExistingUsers(
    userRepo: Repository<User>,
    users: Optional<SignupDto, 'password'>[],
  ): Promise<User[]> {
    if (users.length === 0) return [];

    const emails: string[] = [];
    const phoneNumbers: string[] = [];

    users.forEach((u) => {
      if (u.email) emails.push(u.email);
      if (u.phoneNumber) phoneNumbers.push(u.phoneNumber);
    });
    if (emails.length === 0 && phoneNumbers.length === 0) return [];

    const queryBuilder = userRepo.createQueryBuilder('user');

    if (emails.length > 0 && phoneNumbers.length > 0) {
      queryBuilder.where(
        'user.email IN (:...emails) OR user.phoneNumber IN (:...phoneNumbers)',
        {
          emails,
          phoneNumbers,
        },
      );
    } else if (emails.length > 0) {
      queryBuilder.where('user.email IN (:...emails)', { emails });
    } else {
      queryBuilder.where('user.phoneNumber IN (:...phoneNumbers)', {
        phoneNumbers,
      });
    }

    return queryBuilder.getMany();
  }

  async delete(id: number): Promise<string> {
    const deletedUser = await this.userRepositry.delete(id);
    if (deletedUser.affected === 0)
      throw new NotFoundException(`User with ID ${id} not found`);
    await this.redisService.delete(`user_${id}`);
    return 'user deleted';
  }

  private generateTempPassword(): string {
    const length = 8;
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}
