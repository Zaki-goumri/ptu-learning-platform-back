import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDate, IsArray, ValidateNested, IsOptional, IsEnum, IsNumber, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { QuestionType, QUESTION_TYPE_VALUES } from '../types/question-type.type';

export class CreateQuizQuestionDto {
  @ApiProperty({
    example: 'What is the correct way to declare a variable in JavaScript?',
    description: 'The question text',
  })
  @IsNotEmpty()
  @IsString()
  questionText: string;

  @ApiProperty({
    example: 'multiple_choice',
    description: 'The type of question',
    enum: QUESTION_TYPE_VALUES,
  })
  @IsNotEmpty()
  @IsEnum(QUESTION_TYPE_VALUES)
  type: QuestionType;

  @ApiProperty({
    example: ['var x = 1;', 'let x = 1;', 'const x = 1;', 'variable x = 1;'],
    description: 'Array of answer options (for multiple choice/select)',
    required: false,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  options?: string[];

  @ApiProperty({
    example: 1,
    description: 'Index of the correct answer in the options array (for multiple choice)',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  correctAnswer?: number;

  @ApiProperty({
    example: [1, 2],
    description: 'Array of correct answer indices (for multiple select)',
    required: false,
  })
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  correctAnswers?: number[];

  @ApiProperty({
    example: true,
    description: 'Correct answer for true/false questions',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  correctBooleanAnswer?: boolean;

  @ApiProperty({
    example: 'let',
    description: 'Correct answer for short answer questions',
    required: false,
  })
  @IsOptional()
  @IsString()
  correctTextAnswer?: string;

  @ApiProperty({
    example: 10,
    description: 'Maximum points for this question',
  })
  @IsOptional()
  @IsNumber()
  points?: number;
}

export class CreateQuizDto {
  @ApiProperty({
    example: 'JavaScript Fundamentals Quiz',
    description: 'The title of the quiz',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    example: '2024-12-31T23:59:59.000Z',
    description: 'The due date for submitting the quiz',
  })
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  dueDate: Date;

  @ApiProperty({
    description: 'Array of questions for the quiz',
    type: [CreateQuizQuestionDto],
  })
  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuizQuestionDto)
  questions: CreateQuizQuestionDto[];
} 