import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDate, IsEnum, IsOptional, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
import { AttendanceSession, AttendanceStatus } from '../entities/attendance.entity';

export class UpdateAttendanceDto {
  @ApiPropertyOptional({
    example: '2024-01-15',
    description: 'The date of the attendance record',
  })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  date?: Date;

  @ApiPropertyOptional({
    example: 'morning',
    description: 'The session of the day (morning or afternoon)',
    enum: AttendanceSession,
  })
  @IsOptional()
  @IsEnum(AttendanceSession)
  session?: AttendanceSession;

  @ApiPropertyOptional({
    example: 'present',
    description: 'The attendance status of the student',
    enum: AttendanceStatus,
  })
  @IsOptional()
  @IsEnum(AttendanceStatus)
  status?: AttendanceStatus;

  @ApiPropertyOptional({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'The ID of the course for which attendance is being recorded',
  })
  @IsOptional()
  @IsUUID()
  courseId?: string;

  @ApiPropertyOptional({
    example: '123e4567-e89b-12d3-a456-426614174001',
    description: 'The ID of the student whose attendance is being recorded',
  })
  @IsOptional()
  @IsUUID()
  studentId?: string;
} 