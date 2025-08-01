import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

/**
 * DTO for creating a message.
 */
export class CreateMessageDto {
  @ApiProperty({
    example: 'Hello, how are you?',
    description: 'The content of the message.',
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({
    example: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
    description: 'The ID of the user sending the message.',
  })
  @IsUUID()
  @IsNotEmpty()
  senderId: string;

  @ApiProperty({
    example: 'f0e9d8c7-b6a5-4321-fedc-ba9876543210',
    description: 'The ID of the conversation this message belongs to.',
  })
  @IsUUID()
  @IsNotEmpty()
  conversationId: string;
}
