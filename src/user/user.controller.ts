import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiOperation,
  ApiParam,
  ApiNotFoundResponse,
  ApiQuery,
  ApiNoContentResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTooManyRequestsResponse,
} from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { PaginationQueryDto } from 'src/common/dtos/pagination.dto';
import { SWAGGER_DESC } from 'src/common/constants/swagger.constants';

/*
 * user crud endpoints
 */
// common responses

@Controller('user')
@ApiTooManyRequestsResponse({
  description: SWAGGER_DESC.TOO_MANY_REQUESTS,
})
@ApiNotFoundResponse({
  description: SWAGGER_DESC.NOT_FOUND,
})
@ApiInternalServerErrorResponse({
  description: SWAGGER_DESC.INTERNAL_SERVER_ERROR,
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'find users with pagination',
    description: 'find a user by pagination config passed in Query',
  })
  @ApiOkResponse({
    description: 'find users by pagination',
    type: [User],
  })
  @ApiQuery({
    name: 'pageination dto',
    type: PaginationQueryDto,
  })
  @Get()
  async findByPagination(@Query() paginationDto: PaginationQueryDto) {
    return await this.userService.findByPagination(paginationDto);
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
  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.userService.findById(id);
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
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(id, updateUserDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'delete user',
    description:
      'find a user by his id which is passed in Param and delete it ',
  })
  @ApiNoContentResponse({
    description: 'find user by id and delete it ',
    example: 'user with id ${id} is deleted',
  })
  @ApiParam({ name: 'id', description: 'id of the user that i wanna find ' })
  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.userService.delete(id);
  }
}
