import { ApiQuery } from '@nestjs/swagger';
import { Controller, Get, Query, Param } from '@nestjs/common';
import { ChatService } from './chat.service';
import { PaginationQueryDto } from 'src/common/dtos/pagination.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'limit', type: Number, required: false })
  @Get(':conversationId/messages')
  async getMessages(
    @Param('conversationId') conversationId: string,
    @Query() paginationQuery: PaginationQueryDto,
  ) {
    return this.chatService.findAll(conversationId, paginationQuery);
  }
}
