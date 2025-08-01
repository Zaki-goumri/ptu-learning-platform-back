import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conversation } from './entities/conversation.entity';
import { ConversationMember } from './entities/conversation-member.entity';
import { User } from 'src/user/entities/user.entity';
import { ConversationService } from './conversation.service';
import { ConversationController } from './conversation.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Conversation, ConversationMember, User])],
  controllers: [ConversationController],
  providers: [ConversationService],
  exports: [ConversationService],
})
export class ConversationModule {}
