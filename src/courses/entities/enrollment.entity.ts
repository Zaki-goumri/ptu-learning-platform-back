import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {
  ENROLLMENT_STATUS,
  EnrollmentStatus,
} from '../types/enrollment-status.type';
import { User } from 'src/user/entities/user.entity';
import { Course } from './course.entity';

@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'The unique identifier of the enrollment',
  })
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'The user who enrolled in the course',
  })
  student: User;

  @ManyToOne(() => Course)
  @JoinColumn({ name: 'courseId' })
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'The course that the user enrolled in',
  })
  course: Course;

  @Column({
    type: 'enum',
    enum: ENROLLMENT_STATUS,
    default: ENROLLMENT_STATUS.PENDING,
  })
  @ApiProperty({
    example: 'PENDING',
    description: 'The status of the enrollment',
    enum: ENROLLMENT_STATUS,
    default: ENROLLMENT_STATUS.PENDING,
  })
  status: EnrollmentStatus;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @ApiProperty({
    example: '2024-01-15T08:30:00.000Z',
    description: 'Timestamp when the enrollment was created',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  @ApiProperty({
    example: '2024-01-15T08:30:00.000Z',
    description: 'Timestamp when the enrollment was last updated',
  })
  updatedAt: Date;
}
