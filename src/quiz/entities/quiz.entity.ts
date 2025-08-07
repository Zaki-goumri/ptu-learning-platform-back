import { ApiProperty } from '@nestjs/swagger';
import { Course } from 'src/courses/entities/course.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { QuizQuestion } from './quiz-question.entity';

@Entity()
export class Quiz {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Unique identifier for the quiz (UUID)',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'JavaScript Fundamentals Quiz',
    description: 'The title of the quiz',
  })
  @Column({ type: 'varchar', length: 200 })
  title: string;

  @ApiProperty({
    example: '2024-12-31T23:59:59.000Z',
    description: 'The due date for submitting the quiz',
  })
  @Column({ type: 'timestamp' })
  dueDate: Date;

  @ApiProperty({
    example: '2024-01-15T08:30:00.000Z',
    description: 'Timestamp when the quiz was created',
  })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ApiProperty({
    example: '2024-02-20T14:45:00.000Z',
    description: 'Timestamp when the quiz was last updated',
  })
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'The course this quiz belongs to',
    type: () => Course,
  })
  @ManyToOne(() => Course)
  @JoinColumn({ name: 'courseId' })
  course: Course;

} 