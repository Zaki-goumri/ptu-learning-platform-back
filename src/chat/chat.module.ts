import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { WsAuthGuard } from './guards/ws-auth.guard';
import { RedisModule } from 'src/redis/redis.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conversation, ConversationMember, Message } from './entities';
import { ChatController } from './chat.controller';

@Module({
  imports: [
    UserModule,
    JwtModule,
    RedisModule,
    TypeOrmModule.forFeature([Message, Conversation, ConversationMember]),
  ],
  controllers: [ChatController],
  providers: [ChatGateway, ChatService, WsAuthGuard],
})
export class ChatModule {}
