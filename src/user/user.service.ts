import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepositry: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = await this.userRepositry.save({ ...createUserDto });
    return newUser;
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    const userFound = await this.userRepositry.findOneById(id);
    if (!userFound) {
      throw new NotFoundException('the user does not exist');
    }
    return userFound;
  }

  async update(id: number, updateUserData: UpdateUserDto) {
    const updatedUser = await this.userRepositry.update(id, updateUserData);
    return updatedUser;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
