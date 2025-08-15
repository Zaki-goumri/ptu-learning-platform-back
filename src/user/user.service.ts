import { generateTempPassword } from 'src/common/utils/string.utils';
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
import {
  PaginatedResponseDto,
  PaginationQueryDto,
} from 'src/common/dtos/pagination.dto';
import { DepartementService } from 'src/departement/departement.service';
import {
  SEARCH_JOB_NAME,
  IndexDocumentJob,
  UpdateDocumentJob,
  DeleteDocumentJob,
} from 'src/common/constants/search-jobs.name';
import { UserSearchDto } from 'src/search/dto/user-search.dto';

@Injectable()
export class UserService {
  logger = new Logger(LOGGER.USER);
  private static readonly CACHE_PREFIX = 'user';

  constructor(
    @InjectRepository(User)
    private userRepositry: Repository<User>,
    private redisService: RedisService,
    private dataSource: DataSource,
    private departementService: DepartementService,
    @InjectQueue(QUEUE_NAME.MAIL_QUEUE) private readonly mailQueue: Queue,
    @InjectQueue(QUEUE_NAME.SEARCH_QUEUE)
    private readonly searchQueue: Queue<
      | IndexDocumentJob<UserSearchDto>
      | UpdateDocumentJob<UserSearchDto>
      | DeleteDocumentJob
    >,
  ) {}

  static getUserCacheKey(criteria: string | number): string {
    return `${UserService.CACHE_PREFIX}:${criteria}`;
  }

  async create(createUser: SignupDto): Promise<User> {
    const department = await this.departementService.findById(
      createUser.departmentId,
    );
    if (!department) throw new NotFoundException('the department is not found');
    const hashedPassword = await generateHash(createUser.password);
    const user = await this.userRepositry.save({
      ...createUser,
      password: hashedPassword,
      departement: department,
    });
    const userSearchDto: UserSearchDto = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      departmentLabel: department.label,
      role: user.role,
    };
    await this.searchQueue.add(SEARCH_JOB_NAME.INDEX_DOCUMENT, {
      index: 'users',
      id: user.id,
      document: userSearchDto,
    } as IndexDocumentJob<UserSearchDto>);
    return user;
  }

  async findByPagination(
    paginationDto: PaginationQueryDto,
  ): Promise<PaginatedResponseDto<User>> {
    const { page = 1, limit = 10 } = paginationDto;
    const skip = (page - 1) * limit;
    const [data, total] = await this.userRepositry.findAndCount({
      skip,
      take: limit,
      relations: ['departement'],
      select: { departement: { label: true } },
    });

    return new PaginatedResponseDto(data, total, page, limit);
  }

  async findById(id: string): Promise<User> {
    const cachedUser = await this.redisService.get<User>(
      UserService.getUserCacheKey(id),
    );
    if (cachedUser) return cachedUser;

    const userFound = await this.userRepositry.findOne({
      where: { id },
      relations: ['departement'],
      select: { departement: { label: true } },
    });
    if (!userFound) throw new NotFoundException(`user with id ${id} not found`);
    await this.redisService.set<User>(
      UserService.getUserCacheKey(id),
      userFound,
    );
    return userFound;
  }

  async findOneByEmail(email: string): Promise<User> {
    const cachedUser = await this.redisService.get<User>(
      UserService.getUserCacheKey(email),
    );
    if (cachedUser) return cachedUser;

    const userFound = await this.userRepositry.findOne({
      where: { email },
      relations: ['departement'],
      select: { departement: { label: true } },
    });
    if (!userFound) {
      await this.redisService.delete(UserService.getUserCacheKey(email));
      throw new NotFoundException(
        `the user with email ${email} does not exist`,
      );
    }
    await this.redisService.set<User>(
      UserService.getUserCacheKey(userFound.email),
      userFound,
    );
    return userFound;
  }

  async update(id: string, updateUserData: UpdateUserDto): Promise<User> {
    const user = await this.findById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    const updatedUser = await this.userRepositry.save({
      ...updateUserData,
      id,
    });
    if (!updatedUser)
      throw new BadRequestException(`User with ID ${id} not updated`);

    await this.redisService.delete(UserService.getUserCacheKey(id));
    await this.redisService.delete(UserService.getUserCacheKey(user.email));

    const userSearchDto: Partial<UserSearchDto> = {
      email: updatedUser.email,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      role: updatedUser.role,
    };
    if (updatedUser.departement) {
      userSearchDto.departmentLabel = updatedUser.departement.label;
    }

    await this.searchQueue.add(SEARCH_JOB_NAME.UPDATE_DOCUMENT, {
      index: 'users',
      id: updatedUser.id,
      document: userSearchDto,
    } as UpdateDocumentJob<UserSearchDto>);

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
      this._validateUsersHavePasswords(users);
    }

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    const userRepo = queryRunner.manager.getRepository(User);

    try {
      const existingUsers = await this.findExistingUsers(userRepo, users);
      const validUsers = await this._prepareUsers(
        users,
        existingUsers,
        skipDuplicates,
        tempPassword,
        userRepo,
      );

      const savedUsers =
        validUsers.length > 0 ? await userRepo.save(validUsers) : [];
      await queryRunner.commitTransaction();

      if (welcomeEmail && savedUsers.length > 0) {
        this._sendWelcomeEmails(savedUsers);
      }

      return { inserted: savedUsers.length };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  private _validateUsersHavePasswords(
    users: Optional<SignupDto, 'password'>[],
  ) {
    const firstUserWithoutPassword = users.find((user) => !user?.password);
    if (firstUserWithoutPassword) {
      throw new ConflictException(
        `Password missing for some users with email and tempPassword option is false`,
      );
    }
  }

  private async _prepareUsers(
    users: Optional<SignupDto, 'password'>[],
    existingUsers: User[],
    skipDuplicates: boolean,
    tempPassword: boolean,
    userRepo: Repository<User>,
  ): Promise<(User & { tempPass: string })[]> {
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

      const tempPass = tempPassword ? generateTempPassword() : dto?.password;
      if (!tempPass)
        throw new ConflictException(
          `Password missing for some users with email and tempPassword option is false`,
        );
      const user = userRepo.create({
        ...dto,
        password: await generateHash(tempPass),
      });

      validUsers.push({ ...user, tempPass });
    }
    return validUsers;
  }

  private _sendWelcomeEmails(savedUsers: User[]) {
    this.mailQueue
      .add(
        JOB_NAME.SEND_WELCOME_EMAIL,
        savedUsers.map((user) =>
          omit(user, ['department', 'year', 'role', 'yearGroup', 'password']),
        ),
      )
      .catch((error) => {
        this.logger.error('Failed to queue welcome emails:', error);
      });
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

  async delete(id: string): Promise<string> {
    const user = await this.findById(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    const deletedUser = await this.userRepositry.delete(id);
    if (deletedUser.affected === 0)
      throw new NotFoundException(`User with ID ${id} not found`);

    await this.redisService.delete(UserService.getUserCacheKey(id));
    if (user.email) {
      await this.redisService.delete(UserService.getUserCacheKey(user.email));
    }

    await this.searchQueue.add(SEARCH_JOB_NAME.DELETE_DOCUMENT, {
      index: 'users',
      id: id,
    } as DeleteDocumentJob);

    return 'user deleted';
  }
}

