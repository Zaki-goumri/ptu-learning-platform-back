import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsOptional, Min, Max } from 'class-validator';

export class GradeSubmissionDto {
  @ApiProperty({
    example: 8,
    description: 'Points awarded for this answer',
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  points: number;

  @ApiProperty({
    example: 'Good answer, but could be more detailed about the differences',
    description: 'Feedback from the teacher',
    required: false,
  })
  @IsOptional()
  @IsString()
  feedback?: string;
} 