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
@Injectable()
export class UserService {
  logger = new Logger('auth');
  constructor(
    @InjectRepository(User)
    private userRepositry: Repository<User>,
    private redisService: RedisService,
    private dataSource: DataSource,
    @InjectQueue(QUEUE_NAME.MAIL_QUEUE) private readonly mailQueue: Queue,
  ) {}
  async create(createUser: SignupDto): Promise<User> {
    const hashedPassword = await generateHash(createUser.password);

    const newUser = await this.userRepositry.save({
      ...createUser,
      password: hashedPassword,
    });
    if (!newUser)
      throw new ConflictException('there is an error in saving the user');
    await this.redisService.set(`user_${newUser.id}`, JSON.stringify(newUser));
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
    const cachedUser: string | null = await this.redisService.get(`user_${id}`);
    if (cachedUser) {
      const parsedUses = JSON.parse(cachedUser) as User;
      return parsedUses;
    }
    const userFound = await this.userRepositry.findOneById(id);
    if (!userFound) {
      throw new NotFoundException('the user does not exist');
    }
    return userFound;
  }

  async findOneByEmail(email: string): Promise<User> {
    const cacheKey = `user_email_${email}`;
    const cachedUser = await this.redisService.get(cacheKey);
    if (cachedUser) return JSON.parse(cachedUser) as User;

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
    await this.redisService.set(`user_${id}`, JSON.stringify(updatedUser));
    return updatedUser;
  }

  async bulkCreate(
    users: Omit<SignupDto, 'password'>[],
    options: {
      skipDuplicates: boolean;
      tempPassword: boolean;
      welcomeEmail: boolean;
    },
  ) {
    const { skipDuplicates, tempPassword, welcomeEmail } = options;
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const userRepo = queryRunner.manager.getRepository(User);
    const savedUsers: User[] = [];
    try {
      for (const dto of users) {
        const exist = await userRepo.findOne({
          where: [{ email: dto.email }, { phoneNumber: dto.phoneNumber }],
        });
        if (exist) {
          if (skipDuplicates) continue;
          else
            throw new ConflictException(
              `User with email ${dto.email} or phone number ${dto.phoneNumber} already exists`,
            );
        }
        const user = userRepo.create({
          ...dto,
          password: tempPassword ? this.generateTempPassword() : undefined,
        });
        if (!user.password) {
          throw new BadRequestException(
            `Password missing and tempPassword option is false`,
          );
        }
        savedUsers.push(user);
      }
      await userRepo.save(savedUsers);
      await queryRunner.commitTransaction();
      if (welcomeEmail) {
        await this.mailQueue.add('welcomeEmail', users);
      }
      return { inserted: savedUsers.length };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
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
