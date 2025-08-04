import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dtos/messages/create-message.dto';
import { Conversation, ConversationMember, Message } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  PaginatedResponseDto,
  PaginationQueryDto,
} from 'src/common/dtos/pagination.dto';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Message)
    private messageRepositry: Repository<Message>,
    private readonly redisServie: RedisService,
    @InjectRepository(Conversation)
    private readonly conversationRepo: Repository<Conversation>,
    @InjectRepository(ConversationMember)
    private readonly conversationMemberRepo: Repository<ConversationMember>,
  ) {}
  async create(createMessageDto: CreateMessageDto) {
    const message = this.messageRepositry.create(createMessageDto);
    return await this.messageRepositry.save(message);
  }
  private static getMessageListCacheKey(
    conversationId: string,
    page: number,
    limit: number,
  ): string {
    return `messages:conversation:${conversationId}:page:${page}:limit:${limit}`;
  }

  async findAll(
    conversationId: string,
    paginationQuery: PaginationQueryDto,
  ): Promise<PaginatedResponseDto<Message>> {
    const { page = 1, limit = 10 } = paginationQuery;
    const cacheKey = ChatService.getMessageListCacheKey(
      conversationId,
      page,
      limit,
    );
    const cachedMessages =
      await this.redisServie.get<PaginatedResponseDto<Message>>(cacheKey);
    if (cachedMessages) return cachedMessages;
    const [data, total] = await this.messageRepositry.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      relations: ['conversationId'],
      where: { conversation: { id: conversationId } },
    });
    const response = new PaginatedResponseDto(data, total, page, limit);
    await this.redisServie.set<PaginatedResponseDto<Message>>(
      cacheKey,
      response,
    );
    return response;
  }

  async checkMembership(
    userId: string,
    conversationId: string,
  ): Promise<boolean> {
    const conversation = await this.conversationMemberRepo.findOne({
      where: {
        conversationId: conversationId,
        userId: userId,
      },
    });
    return conversation ? true : false;
  }

  async getUserRooms(userId: string) {
    const rooms = await this.conversationMemberRepo.find({
      where: { userId },
      select: { conversationId: true },
    });

    return rooms.map((element) => element.conversationId);
  }
}
