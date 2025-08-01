import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatService } from './chat.service';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';

@Module({
  providers: [ChatGateway, ChatService],
})
export class ChatModule {}
