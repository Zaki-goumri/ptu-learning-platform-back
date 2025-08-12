import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dtos/messages/create-message.dto';
import { ConversationMember, Message } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  PaginatedResponseDto,
  PaginationQueryDto,
} from 'src/common/dtos/pagination.dto';
import { RedisService } from 'src/redis/redis.service';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { QUEUE_NAME } from 'src/common/constants/queues.name';
import { JOB_NAME } from 'src/common/constants/jobs.name';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Message)
    private messageRepositry: Repository<Message>,
    private readonly redisServie: RedisService,
    @InjectRepository(ConversationMember)
    private readonly conversationMemberRepo: Repository<ConversationMember>,
    @InjectQueue(QUEUE_NAME.MESSAGE_QUEUE) private readonly queueMessage: Queue,
  ) {}
  async create(createMessageDto: CreateMessageDto) {
    const message = this.messageRepositry.create(createMessageDto);
    await this.queueMessage.add(JOB_NAME.SAVE_MESSAGE, message);
    return message;
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

  async getRoomMembers(conversationId: string) {
    const users = await this.conversationMemberRepo.find({
      where: { conversationId },
      select: { userId: true },
    });
    return users;
  }
}
