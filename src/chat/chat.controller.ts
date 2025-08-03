import { Controller, Get, Query, Param } from '@nestjs/common';
import { ChatService } from './chat.service';
import { PaginationQueryDto } from 'src/common/dtos/pagination.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get(':conversationId/messages')
  async getMessages(
    @Param('conversationId') conversationId: string,
    @Query() paginationQuery: PaginationQueryDto,
  ) {
    return this.chatService.findAll(conversationId, paginationQuery);
  }
}
