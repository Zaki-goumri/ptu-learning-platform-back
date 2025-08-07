import { ApiProperty } from '@nestjs/swagger';
import { Quiz } from './quiz.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { QuestionType, QUESTION_TYPE_VALUES } from '../types/question-type.type';

@Entity()
export class QuizQuestion {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Unique identifier for the quiz question (UUID)',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: 'What is the correct way to declare a variable in JavaScript?',
    description: 'The question text',
  })
  @Column({ type: 'text' })
  questionText: string;

  @ApiProperty({
    example: 'multiple_choice',
    description: 'The type of question',
    enum: QUESTION_TYPE_VALUES,
  })
  @Column({
    type: 'enum',
    enum: QUESTION_TYPE_VALUES,
    default: 'multiple_choice',
  })
  type: QuestionType;

  @ApiProperty({
    example: ['var x = 1;', 'let x = 1;', 'const x = 1;', 'variable x = 1;'],
    description: 'Array of answer options (for multiple choice/select)',
    required: false,
  })
  @Column({ type: 'json', nullable: true })
  options?: string[];

  @ApiProperty({
    example: 1,
    description: 'Index of the correct answer in the options array (for multiple choice)',
    required: false,
  })
  @Column({ type: 'int', nullable: true })
  correctAnswer?: number;

  @ApiProperty({
    example: [1, 2],
    description: 'Array of correct answer indices (for multiple select)',
    required: false,
  })
  @Column({ type: 'json', nullable: true })
  correctAnswers?: number[];

  @ApiProperty({
    example: true,
    description: 'Correct answer for true/false questions',
    required: false,
  })
  @Column({ type: 'boolean', nullable: true })
  correctBooleanAnswer?: boolean;

  @ApiProperty({
    example: 'let',
    description: 'Correct answer for short answer questions',
    required: false,
  })
  @Column({ type: 'text', nullable: true })
  correctTextAnswer?: string;

  @ApiProperty({
    example: 10,
    description: 'Maximum points for this question',
  })
  @Column({ type: 'int', default: 1 })
  points: number;

  @ApiProperty({
    example: '2024-01-15T08:30:00.000Z',
    description: 'Timestamp when the question was created',
  })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ApiProperty({
    example: '2024-02-20T14:45:00.000Z',
    description: 'Timestamp when the question was last updated',
  })
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'The quiz this question belongs to',
    type: () => Quiz,
  })
  @ManyToOne(() => Quiz)
  @JoinColumn({ name: 'quizId' })
  quiz: Quiz;
} 