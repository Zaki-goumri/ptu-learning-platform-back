import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
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
export class Course {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Unique identifier for the course (UUID)',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'Advanced JavaScript Programming',
    description: 'The title/name of the course',
  })
  @Column()
  title: string;

  @ApiProperty({
    example:
      'An in-depth course covering advanced JavaScript concepts including async programming, design patterns, and modern ES6+ features.',
    description: 'Detailed description of the course content and objectives',
  })
  @Column()
  description: string;

  @ApiProperty({
    example: 'https://example.com/images/courses/javascript-cover.jpg',
    description: 'URL or path to the course cover image (optional)',
    required: false,
  })
  @Column({ nullable: true })
  coverImage?: string;

  @ApiProperty({
    example: '2024-01-15T08:30:00.000Z',
    description: 'Timestamp when the course was created',
  })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ApiProperty({
    example: '2024-02-20T14:45:00.000Z',
    description: 'Timestamp when the course was last updated',
  })
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'The teacher/instructor assigned to this course',
    type: () => User,
  })
  @ManyToOne(() => User)
  @JoinColumn({ name: 'teacherId' })
  teacher: User;
}
