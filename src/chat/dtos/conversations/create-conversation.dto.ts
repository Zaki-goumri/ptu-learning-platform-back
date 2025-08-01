import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ConversationType } from 'src/chat/entities/conversation.entity';

/**
 * DTO for creating a conversation.
 */
export class CreateConversationDto {
  @ApiProperty({
    example: 'Project Alpha Team',
    description: 'The name of the conversation (for group chats).',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: ConversationType.GROUP,
    enum: ConversationType,
    description: 'The type of conversation.',
  })
  @IsEnum(ConversationType)
  @IsNotEmpty()
  type: ConversationType;

  @ApiProperty({
    type: [String],
    example: ['a1b2c3d4-e5f6-7890-1234-567890abcdef', 'f0e9d8c7-b6a5-4321-fedc-ba9876543210'],
    description: 'An array of user IDs to be included in the conversation.',
  })
  @IsArray()
  @IsUUID('all', { each: true })
  @IsNotEmpty()
  members: string[];
}
