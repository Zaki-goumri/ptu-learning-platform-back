import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { Attendance } from './entities/attendance.entity';
import {
  PaginationQueryDto,
  PaginatedResponseDto,
} from 'src/common/dtos/pagination.dto';
import { AccessTokenGuard } from 'src/auth/guards/access-token.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { Roles } from 'src/auth/decorators/role.decorator';
import { USER_ROLES } from 'src/user/types/user-role.type';

@UseGuards(AccessTokenGuard, RoleGuard)
@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get('course/:courseId')
  @ApiOperation({
    summary: 'Get attendance records for a specific course',
    description: 'Retrieve paginated attendance records for a specific course',
  })
  @ApiParam({
    name: 'courseId',
    description: 'The ID of the course',
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
    description: 'Attendance records retrieved successfully',
    type: PaginatedResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid parameters',
  })
  async findAllByCourse(
    @Param('courseId') courseId: string,
    @Query() paginationQuery: PaginationQueryDto,
  ): Promise<PaginatedResponseDto<Attendance>> {
    return await this.attendanceService.findAllByCourse(
      courseId,
      paginationQuery,
    );
  }

  @Post()
  @UseGuards(AccessTokenGuard, RoleGuard)
  @Roles(USER_ROLES.ADMIN, USER_ROLES.TEACHER)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create a new attendance record',
    description: 'Create a new attendance record (Admin/Teacher only)',
  })
  @ApiResponse({
    status: 201,
    description: 'Attendance record created successfully',
    type: Attendance,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid data',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing token',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - insufficient permissions',
  })
  async create(
    @Body() createAttendanceDto: CreateAttendanceDto,
  ): Promise<Attendance> {
    return await this.attendanceService.create(createAttendanceDto);
  }

  @Patch(':id')
  @UseGuards(AccessTokenGuard, RoleGuard)
  @Roles(USER_ROLES.ADMIN, USER_ROLES.TEACHER)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Update an attendance record',
    description: 'Update an existing attendance record (Admin/Teacher only)',
  })
  @ApiParam({
    name: 'id',
    description: 'The ID of the attendance record to update',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @ApiResponse({
    status: 200,
    description: 'Attendance record updated successfully',
    type: Attendance,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - invalid data',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing token',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - insufficient permissions',
  })
  @ApiResponse({
    status: 404,
    description: 'Attendance record not found',
  })
  async update(
    @Param('id') id: string,
    @Body() updateAttendanceDto: UpdateAttendanceDto,
  ): Promise<Attendance> {
    return await this.attendanceService.update(id, updateAttendanceDto);
  }

  @Delete(':id')
  @UseGuards(AccessTokenGuard, RoleGuard)
  @Roles(USER_ROLES.ADMIN, USER_ROLES.TEACHER)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Remove an attendance record',
    description: 'Delete an attendance record by ID (Admin/Teacher only)',
  })
  @ApiParam({
    name: 'id',
    description: 'The ID of the attendance record to delete',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @ApiResponse({
    status: 200,
    description: 'Attendance record deleted successfully',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid or missing token',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - insufficient permissions',
  })
  @ApiResponse({
    status: 404,
    description: 'Attendance record not found',
  })
  async remove(@Param('id') id: string) {
    return await this.attendanceService.remove(id);
  }
}
