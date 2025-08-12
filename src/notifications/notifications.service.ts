import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Notification } from './entities/notification.entity';
import { Repository } from 'typeorm';
import {
  PaginatedResponseDto,
  PaginationQueryDto,
} from 'src/common/dtos/pagination.dto';
import { RedisService } from 'src/redis/redis.service';

export interface INotification {
  title: string;
  content: string;
  userId: string;
}

@Injectable()
export class NotificationsService {
  async notify(notification: INotification) {
    await this.redisService.publish('notifications', {
      ...notification,
    });
  }
  private static readonly CACHE_PREFIX = 'notification';

  static getCourseCacheKey(criteria: string | number): string {
    return `${NotificationsService.CACHE_PREFIX}:${criteria}`;
  }

  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
    private readonly redisService: RedisService,
  ) {}

  async create(
    createNotificationDto: CreateNotificationDto,
  ): Promise<Notification> {
    const notification = this.notificationRepository.create({
      ...createNotificationDto,
      user: { id: createNotificationDto?.userId },
    });
    return await this.notificationRepository.save(notification);
  }

  async findMany(
    paginationDto: PaginationQueryDto,
  ): Promise<PaginatedResponseDto<Notification>> {
    const { page = 1, limit = 10 } = paginationDto;
    const [data, total] = await this.notificationRepository.findAndCount({
      skip: page - 1 - limit,
      take: limit,
    });
    return new PaginatedResponseDto(data, total, page, limit);
  }

  async findOne(id: string): Promise<Notification> {
    const notification = await this.notificationRepository.findOneBy({ id });
    if (!notification) throw new NotFoundException('Notification not found');
    return notification;
  }

  async update(
    id: string,
    updateNotificationDto: UpdateNotificationDto,
  ): Promise<{ affected: number }> {
    const { affected } = await this.notificationRepository.update(
      id,
      updateNotificationDto,
    );
    if (!affected) throw new NotFoundException('notification not found');
    return { affected };
  }

  async remove(id: string): Promise<{ deleted: boolean }> {
    const result = await this.notificationRepository.delete(id);
    if (result.affected === 0)
      throw new NotFoundException('Notification not found');
    return { deleted: true };
  }
}
