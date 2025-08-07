import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDate, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { AttendanceSession, ATTENDANCE_SESSION_VALUES } from '../types/attendance-session.type';
import { AttendanceStatus, ATTENDANCE_STATUS_VALUES } from '../types/attendance-status.type';

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
    enum: ATTENDANCE_SESSION_VALUES,
  })
  @IsNotEmpty()
  @IsEnum(ATTENDANCE_SESSION_VALUES)
  session: AttendanceSession;

  @ApiProperty({
    example: 'present',
    description: 'The attendance status of the student',
    enum: ATTENDANCE_STATUS_VALUES,
  })
  @IsNotEmpty()
  @IsEnum(ATTENDANCE_STATUS_VALUES)
  status: AttendanceStatus;
} 