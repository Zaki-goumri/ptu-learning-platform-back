import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Conversation } from './entities/conversation.entity';
import { CreateConversationDto } from './dtos/conversations/create-conversation.dto';
import { User } from 'src/user/entities/user.entity';
import { ConversationMember } from './entities/conversation-member.entity';
import {
  PaginatedResponseDto,
  PaginationQueryDto,
} from 'src/common/dtos/pagination.dto';
import { UpdateConversationDto } from './dtos/conversations/update-conversatio.dto';
import { LOGGER } from 'src/common/constants/logger.name';
import { RedisService } from 'src/redis/redis.service';
@Injectable()
export class ConversationService {
  logger = new Logger(LOGGER.USER);
  private static readonly CACHE_PREFIX = 'conversation';
  private static readonly LIST_CACHE_PREFIX = 'conversations';

  static getConversationCacheKey(criteria: string | number): string {
    return `${ConversationService.CACHE_PREFIX}:${criteria}`;
  }
  private static getConversationListCacheKey(
    page: number,
    limit: number,
  ): string {
    return `${ConversationService.LIST_CACHE_PREFIX}:page:${page}:limit:${limit}`;
  }

  constructor(
    @InjectRepository(Conversation)
    private readonly conversationRepository: Repository<Conversation>,
    @InjectRepository(ConversationMember)
    private readonly conversationMemberRepository: Repository<ConversationMember>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly redisService: RedisService,
  ) {}

  async create(
    createConversationDto: CreateConversationDto,
    creatorId: string,
  ) {
    const { name, type, members: memberIds } = createConversationDto;

    const members = await this.userRepository.findBy({ id: In(memberIds) });
    if (members.length !== memberIds.length) {
      throw new NotFoundException('One or more members not found.');
    }

    const creator = await this.userRepository.findOneBy({ id: creatorId });
    if (!creator) {
      throw new NotFoundException('Creator not found.');
    }

    const conversation = this.conversationRepository.create({ name, type });
    const savedConversation =
      await this.conversationRepository.save(conversation);

    const conversationMembers = members.map((member) => {
      return this.conversationMemberRepository.create({
        conversation: savedConversation,
        user: member,
        role: member.id === creatorId ? 'ADMIN' : 'MEMBER',
      });
    });

    await this.conversationMemberRepository.save(conversationMembers);

    return savedConversation;
  }

  async findAll(
    paginationQuery: PaginationQueryDto,
  ): Promise<PaginatedResponseDto<Conversation>> {
    const { page = 1, limit = 10 } = paginationQuery;
    const cachedConversations = await this.redisService.get<
      PaginatedResponseDto<Conversation>
    >(ConversationService.getConversationListCacheKey(page, limit));
    if (cachedConversations) return cachedConversations;
    const [data, total] = await this.conversationRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      relations: ['members', 'members.user'],
    });
    const response = new PaginatedResponseDto<Conversation>(
      data,
      total,
      page,
      limit,
    );
    await this.redisService.set<PaginatedResponseDto<Conversation>>(
      ConversationService.getConversationListCacheKey(page, limit),
      response,
    );
    return response;
  }

  async findOne(id: string): Promise<Conversation> {
    const cachedConversation = await this.redisService.get<Conversation>(
      ConversationService.getConversationCacheKey(id),
    );
    if (cachedConversation) return cachedConversation;
    const conversation = await this.conversationRepository.findOne({
      where: { id },
      relations: ['members', 'members.user', 'messages'],
    });
    if (!conversation) {
      throw new NotFoundException(`Conversation with ID "${id}" not found.`);
    }
    await this.redisService.set<Conversation>(
      ConversationService.getConversationCacheKey(id),
      conversation,
    );
    return conversation;
  }

  async update(id: string, updateConversationDto: UpdateConversationDto) {
    const conversation = await this.findOne(id);
    Object.assign(conversation, updateConversationDto);
    return this.conversationRepository.save(conversation);
  }

  async remove(id: string) {
    const conversation = await this.findOne(id);
    await this.conversationRepository.remove(conversation);
    return { message: `Conversation with ID "${id}" has been removed.` };
  }
}
