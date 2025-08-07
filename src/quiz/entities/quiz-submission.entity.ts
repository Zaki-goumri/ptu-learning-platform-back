import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
import { Quiz } from './quiz.entity';
import { QuizQuestion } from './quiz-question.entity';
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
export class QuizSubmission {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Unique identifier for the quiz submission (UUID)',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'let is the modern way to declare variables in JavaScript',
    description: 'The student answer text',
  })
  @Column({ type: 'text' })
  answer: string;

  @ApiProperty({
    example: 8,
    description: 'Points awarded for this answer (0 if not graded yet)',
  })
  @Column({ type: 'int', default: 0 })
  points: number;

  @ApiProperty({
    example: 'Good answer, but could be more detailed',
    description: 'Feedback from the teacher',
    required: false,
  })
  @Column({ type: 'text', nullable: true })
  feedback?: string;

  @ApiProperty({
    example: false,
    description: 'Whether this submission has been graded',
  })
  @Column({ type: 'boolean', default: false })
  isGraded: boolean;

  @ApiProperty({
    example: '2024-01-15T08:30:00.000Z',
    description: 'Timestamp when the submission was created',
  })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ApiProperty({
    example: '2024-02-20T14:45:00.000Z',
    description: 'Timestamp when the submission was last updated',
  })
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'The student who submitted this answer',
    type: () => User,
  })
  @ManyToOne(() => User)
  @JoinColumn({ name: 'studentId' })
  student: User;

  @ApiProperty({
    description: 'The quiz this submission belongs to',
    type: () => Quiz,
  })
  @ManyToOne(() => Quiz)
  @JoinColumn({ name: 'quizId' })
  quiz: Quiz;

  @ApiProperty({
    description: 'The specific question this submission answers',
    type: () => QuizQuestion,
  })
  @ManyToOne(() => QuizQuestion)
  @JoinColumn({ name: 'questionId' })
  question: QuizQuestion;

  @ApiProperty({
    description: 'The teacher who graded this submission',
    type: () => User,
    required: false,
  })
  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'gradedBy' })
  gradedBy?: User;
} 