import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiOperation,
  ApiParam,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiQuery,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'create user',
    description: 'create a new user and save in db ',
  })
  @ApiCreatedResponse({ description: 'create a new user', type: User })
  @ApiNotFoundResponse({
    description: 'user with id ${id} not found',
    example: 'user with id ${id} not found',
  })
  @ApiInternalServerErrorResponse({
    description: 'internal server error',
    example: 'internal server error',
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'find users with pagination',
    description: 'find a user by pagination config passed in Query',
  })
  @ApiOkResponse({
    description: 'find users by pagination',
    type: [User],
  })
  @ApiQuery({ name: 'page', description: 'pagination config' })
  @ApiQuery({ name: 'limit', description: 'pagination config' })
  @ApiNotFoundResponse({
    description: 'user with id ${id} not found',
    example: 'user with id ${id} not found',
  })
  @ApiInternalServerErrorResponse({
    description: 'internal server error',
    example: 'internal server error',
  })
  @Get()
  findByPagination(@Query('page') page: number, @Query('limit') limit: number) {
    return this.userService.findByPagination(page, limit);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'find user by id ',
    description: 'find a user by his id which is passed in Param',
  })
  @ApiOkResponse({
    description: 'find user by id',
    type: User,
  })
  @ApiParam({ name: 'id', description: 'id of the user that i wanna find ' })
  @ApiNotFoundResponse({
    description: 'user with id ${id} not found',
    example: 'user with id ${id} not found',
  })
  @ApiInternalServerErrorResponse({
    description: 'internal server error',
    example: 'internal server error',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'update user ',
    description:
      'find a user by his id which is passed in Param and update it ',
  })
  @ApiOkResponse({
    description: 'find user by id and update it ',
    type: User,
  })
  @ApiParam({ name: 'id', description: 'id of the user that i wanna find ' })
  @ApiNotFoundResponse({
    description: 'user with id ${id} not found',
    example: 'user with id ${id} not found',
  })
  @ApiInternalServerErrorResponse({
    description: 'internal server error',
    example: 'internal server error',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'delete user',
    description:
      'find a user by his id which is passed in Param and delete it ',
  })
  @ApiOkResponse({
    description: 'find user by id and delete it ',
    example: 'user with id ${id} is deleted',
    type: String,
  })
  @ApiParam({ name: 'id', description: 'id of the user that i wanna find ' })
  @ApiNotFoundResponse({
    description: 'user with id ${id} not found',
    example: 'user with id ${id} not found',
  })
  @ApiInternalServerErrorResponse({
    description: 'internal server error',
    example: 'internal server error',
  })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(+id);
  }
}
