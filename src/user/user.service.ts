import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RedisService } from 'src/redis/redis.service';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepositry: Repository<User>,
    private redisService: RedisService,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = await this.userRepositry.save({ ...createUserDto });
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

  async findOne(id: number): Promise<User | NotFoundException> {
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

  async findOneByEmail(email: string): Promise<User | NotFoundException> {
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

  async delete(id: number): Promise<string> {
    const deletedUser = await this.userRepositry.delete(id);
    if (deletedUser.affected === 0)
      throw new NotFoundException(`User with ID ${id} not found`);
    await this.redisService.delete(`user_${id}`);
    return 'user deleted';
  }
}
