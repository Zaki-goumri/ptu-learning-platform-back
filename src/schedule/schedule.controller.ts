import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiInternalServerErrorResponse,
  ApiTooManyRequestsResponse,
} from '@nestjs/swagger';
import { ScheduleService } from './schedule.service';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from './entities/session.entity';
import { AccessTokenGuard } from 'src/auth/guards/access-token.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/auth/decorators/role.decorator';
import { USER_ROLES } from 'src/user/types/user-role.type';

/*
 * schedule crud endpoints
 */
@ApiTags('Schedule')
@Controller('schedules')
@UseGuards(AccessTokenGuard, RoleGuard)
@Roles(USER_ROLES.ADMIN)
@ApiBearerAuth()
// common responses
@ApiTooManyRequestsResponse({
  description: 'rate limiting to many messages',
  example: 'ThrottlerException: Too Many Requests',
})
@ApiNotFoundResponse({
  description: 'session with id ${id} not found',
  example: 'session with id ${id} not found',
})
@ApiInternalServerErrorResponse({
  description: 'internal server error',
  example: 'internal server error',
})
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'get weekly schedule',
    description: 'get all sessions organized by day of the week',
  })
  @ApiResponse({
    status: 200,
    description: 'weekly schedule retrieved successfully',
    type: Array,
  })
  @Get()
  async getWeeklySchedule(): Promise<{ day: string; sessions: Session[] }[]> {
    return await this.scheduleService.getWeeklySchedule();
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'find session by id',
    description: 'find a session by his id which is passed in Param',
  })
  @ApiResponse({
    status: 200,
    description: 'find session by id',
    type: Session,
  })
  @ApiParam({ name: 'id', description: 'id of the session that i wanna find' })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Session> {
    return await this.scheduleService.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'update session',
    description: 'find a session by his id which is passed in Param and update it',
  })
  @ApiResponse({
    status: 200,
    description: 'session updated successfully',
    type: Session,
  })
  @ApiParam({ name: 'id', description: 'id of the session that i wanna update' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSessionDto: UpdateSessionDto,
  ): Promise<Session> {
    return await this.scheduleService.update(id, updateSessionDto);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'delete session',
    description: 'find a session by his id which is passed in Param and delete it',
  })
  @ApiResponse({
    status: 200,
    description: 'session deleted successfully',
    example: 'session with id ${id} is deleted',
    type: String,
  })
  @ApiParam({ name: 'id', description: 'id of the session that i wanna delete' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.scheduleService.remove(id);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'generate automatic schedule',
    description: 'automatically generate schedule for all courses',
  })
  @ApiResponse({
    status: 200,
    description: 'automatic schedule generated successfully',
    type: [Session],
  })
  @Post('generate')
  async generateAutomaticSchedule(): Promise<Session[]> {
    return await this.scheduleService.generateAutomaticSchedule();
  }
} 