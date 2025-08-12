import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateNotificationDto {
  @ApiProperty({
    example: 'New Message from John Doe',
    description: 'The title of the notification',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    example: 'Hello, this is a message from John Doe',
    description: 'The message of the notification',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({
    example: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
    description: 'The ID of the user receiving the notification',
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  userId: string;

  @ApiPropertyOptional({
    example: false,
    description: 'Whether the notification is read or not',
  })
  @IsOptional()
  @IsBoolean()
  read?: boolean;
}
