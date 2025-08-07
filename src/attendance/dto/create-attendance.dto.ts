import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEnum, IsNotEmpty, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';
import { AttendanceSession, AttendanceStatus } from '../entities/attendance.entity';

export class CreateAttendanceDto {
  @ApiProperty({
    example: '2024-01-15',
    description: 'The date of the attendance record',
  })
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  date: Date;

  @ApiProperty({
    example: 'morning',
    description: 'The session of the day (morning or afternoon)',
    enum: AttendanceSession,
  })
  @IsNotEmpty()
  @IsEnum(AttendanceSession)
  session: AttendanceSession;

  @ApiProperty({
    example: 'present',
    description: 'The attendance status of the student',
    enum: AttendanceStatus,
  })
  @IsNotEmpty()
  @IsEnum(AttendanceStatus)
  status: AttendanceStatus;

  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'The ID of the course for which attendance is being recorded',
  })
  @IsNotEmpty()
  @IsUUID()
  courseId: string;

  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174001',
    description: 'The ID of the student whose attendance is being recorded',
  })
  @IsNotEmpty()
  @IsUUID()
  studentId: string;
} 