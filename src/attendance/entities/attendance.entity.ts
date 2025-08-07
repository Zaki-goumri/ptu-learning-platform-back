import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
import { Course } from 'src/courses/entities/course.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum AttendanceSession {
  MORNING = 'morning',
  AFTERNOON = 'afternoon',
}

export enum AttendanceStatus {
  PRESENT = 'present',
  LATE = 'late',
  ABSENT = 'absent',
}

@Entity()
export class Attendance {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Unique identifier for the attendance record (UUID)',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: '2024-01-15',
    description: 'The date of the attendance record',
  })
  @Column({ type: 'date' })
  date: Date;

  @ApiProperty({
    example: 'morning',
    description: 'The session of the day (morning or afternoon)',
    enum: AttendanceSession,
  })
  @Column({
    type: 'enum',
    enum: AttendanceSession,
  })
  session: AttendanceSession;

  @ApiProperty({
    example: 'present',
    description: 'The attendance status of the student',
    enum: AttendanceStatus,
  })
  @Column({
    type: 'enum',
    enum: AttendanceStatus,
  })
  status: AttendanceStatus;

  @ApiProperty({
    example: '2024-01-15T08:30:00.000Z',
    description: 'Timestamp when the attendance record was created',
  })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ApiProperty({
    example: '2024-02-20T14:45:00.000Z',
    description: 'Timestamp when the attendance record was last updated',
  })
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'The course for which attendance is being recorded',
    type: () => Course,
  })
  @ManyToOne(() => Course)
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @ApiProperty({
    description: 'The student whose attendance is being recorded',
    type: () => User,
  })
  @ManyToOne(() => User)
  @JoinColumn({ name: 'studentId' })
  student: User;
} 