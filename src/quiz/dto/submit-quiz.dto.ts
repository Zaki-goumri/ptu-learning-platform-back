import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsArray, IsNumber, IsString, IsBoolean, IsOptional } from 'class-validator';

export class QuizAnswerDto {
  @ApiProperty({
    example: 0,
    description: 'Selected answer index (for multiple choice)',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  selectedAnswer?: number;

  @ApiProperty({
    example: [0, 1],
    description: 'Selected answer indices (for multiple select)',
    required: false,
  })
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  selectedAnswers?: number[];

  @ApiProperty({
    example: true,
    description: 'Selected answer (for true/false)',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  booleanAnswer?: boolean;

  @ApiProperty({
    example: 'let is the modern way to declare variables',
    description: 'Text answer (for short answer/essay)',
    required: false,
  })
  @IsOptional()
  @IsString()
  textAnswer?: string;
}

export class SubmitQuizDto {
  @ApiProperty({
    description: 'Array of answers for each question',
    type: [QuizAnswerDto],
  })
  @IsNotEmpty()
  @IsArray()
  answers: QuizAnswerDto[];
} 