import { Controller, Get, Param, Query } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiTooManyRequestsResponse,
  ApiInternalServerErrorResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { AchievementsService } from './achievements.service';
import { Achievement } from './entities/achievement.entity';
import { UserAchievement } from './entities/user-achievement.entity';
import {
  PaginationQueryDto,
  PaginatedResponseDto,
} from 'src/common/dtos/pagination.dto';
import { SWAGGER_DESC } from 'src/common/constants/swagger.constants';

@ApiTags('Achievements')
@Controller('achievements')
@ApiTooManyRequestsResponse({ description: SWAGGER_DESC.TOO_MANY_REQUESTS })
@ApiInternalServerErrorResponse({
  description: SWAGGER_DESC.INTERNAL_SERVER_ERROR,
})
export class AchievementsController {
  constructor(private readonly achievementsService: AchievementsService) {}

  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'limit', type: Number, required: false })
  @Get()
  @ApiOperation({
    summary: 'Get all achievements',
    description: 'Retrieve paginated achievements in the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Achievements retrieved successfully',
    type: PaginatedResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid parameters',
  })
  async findAll(
    @Query() paginationQuery: PaginationQueryDto,
  ): Promise<PaginatedResponseDto<Achievement>> {
    return await this.achievementsService.findAll(paginationQuery);
  }

  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'limit', type: Number, required: false })
  @Get('users/:id')
  @ApiOperation({
    summary: 'Get user achievements',
    description: 'Retrieve paginated achievements for a specific user',
  })
  @ApiParam({
    name: 'id',
    description: 'The ID of the user',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @ApiResponse({
    status: 200,
    description: 'User achievements retrieved successfully',
    type: PaginatedResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid parameters',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found',
  })
  async findUserAchievements(
    @Param('id') userId: string,
    @Query() paginationQuery: PaginationQueryDto,
  ): Promise<PaginatedResponseDto<UserAchievement>> {
    return await this.achievementsService.findUserAchievements(
      userId,
      paginationQuery,
    );
  }
}

