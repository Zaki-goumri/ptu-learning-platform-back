import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
import { Course } from 'src/courses/entities/course.entity';
import { AttendanceSession, ATTENDANCE_SESSION_VALUES } from '../types/attendance-session.type';
import { AttendanceStatus, ATTENDANCE_STATUS_VALUES } from '../types/attendance-status.type';

export class AttendanceDto {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Unique identifier for the attendance record (UUID)',
  })
  id: string;

  @ApiProperty({
    example: '2024-01-15',
    description: 'The date of the attendance record',
  })
  date: Date;

  @ApiProperty({
    example: 'morning',
    description: 'The session of the day (morning or afternoon)',
    enum: ATTENDANCE_SESSION_VALUES,
  })
  session: AttendanceSession;

  @ApiProperty({
    example: 'present',
    description: 'The attendance status of the student',
    enum: ATTENDANCE_STATUS_VALUES,
  })
  status: AttendanceStatus;

  @ApiProperty({
    example: '2024-01-15T08:30:00.000Z',
    description: 'Timestamp when the attendance record was created',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2024-02-20T14:45:00.000Z',
    description: 'Timestamp when the attendance record was last updated',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'The course for which attendance is being recorded',
    type: () => Course,
  })
  course: Course;

  @ApiProperty({
    description: 'The student whose attendance is being recorded',
    type: () => User,
  })
  student: User;
}
