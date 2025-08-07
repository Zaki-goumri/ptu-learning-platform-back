import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
import { Course } from 'src/courses/entities/course.entity';
import { Room } from './room.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Session {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Unique identifier for the session (UUID)',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'Monday',
    description: 'The day of the week for this session',
  })
  @Column({ type: 'varchar', length: 20 })
  day: string;

  @ApiProperty({
    example: '09:00',
    description: 'The start time of the session (24-hour format)',
  })
  @Column({ type: 'varchar', length: 5 })
  startTime: string;

  @ApiProperty({
    example: '11:00',
    description: 'The end time of the session (24-hour format)',
  })
  @Column({ type: 'varchar', length: 5 })
  endTime: string;

  @ApiProperty({
    example: '2024-01-15T08:30:00.000Z',
    description: 'Timestamp when the session was created',
  })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ApiProperty({
    example: '2024-02-20T14:45:00.000Z',
    description: 'Timestamp when the session was last updated',
  })
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'The course for this session',
    type: () => Course,
  })
  @ManyToOne(() => Course)
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @ApiProperty({
    description: 'The teacher for this session',
    type: () => User,
  })
  @ManyToOne(() => User)
  @JoinColumn({ name: 'teacherId' })
  teacher: User;

  @ApiProperty({
    description: 'The room where this session takes place',
    type: () => Room,
  })
  @ManyToOne(() => Room)
  @JoinColumn({ name: 'roomId' })
  room: Room;
} 