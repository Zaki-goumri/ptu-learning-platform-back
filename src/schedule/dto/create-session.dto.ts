import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID, Matches } from 'class-validator';

export class CreateSessionDto {
  @ApiProperty({
    example: 'Monday',
    description: 'The day of the week for this session',
  })
  @IsNotEmpty()
  @IsString()
  day: string;

  @ApiProperty({
    example: '09:00',
    description: 'The start time of the session (24-hour format HH:MM)',
  })
  @IsNotEmpty()
  @IsString()
  @Matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: 'Start time must be in HH:MM format (24-hour)',
  })
  startTime: string;

  @ApiProperty({
    example: '11:00',
    description: 'The end time of the session (24-hour format HH:MM)',
  })
  @IsNotEmpty()
  @IsString()
  @Matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: 'End time must be in HH:MM format (24-hour)',
  })
  endTime: string;

  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'The ID of the course for this session',
  })
  @IsNotEmpty()
  @IsUUID()
  courseId: string;

  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174001',
    description: 'The ID of the teacher for this session',
  })
  @IsNotEmpty()
  @IsUUID()
  teacherId: string;

  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174002',
    description: 'The ID of the room for this session',
  })
  @IsNotEmpty()
  @IsUUID()
  roomId: string;
} 