import {
  Controller,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { AchievementsService } from './achievements.service';
import { Achievement } from './entities/achievement.entity';
import { UserAchievement } from './entities/user-achievement.entity';
import {
  PaginationQueryDto,
  PaginatedResponseDto,
} from 'src/common/dtos/pagination.dto';

@ApiTags('Achievements')
@Controller('achievements')
export class AchievementsController {
  constructor(private readonly achievementsService: AchievementsService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all achievements',
    description: 'Retrieve paginated achievements in the system',
  })
  @ApiQuery({
    name: 'page',
    description: 'Page number for pagination',
    required: false,
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    description: 'Number of items per page',
    required: false,
    example: 10,
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
  @ApiQuery({
    name: 'page',
    description: 'Page number for pagination',
    required: false,
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    description: 'Number of items per page',
    required: false,
    example: 10,
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
    return await this.achievementsService.findUserAchievements(userId, paginationQuery);
  }
} 