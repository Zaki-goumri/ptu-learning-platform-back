import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
  BadRequestException,
} from '@nestjs/common';
import Redis from 'ioredis';
import { ConfigService } from '@nestjs/config';
import { IConfig } from 'src/config/interfaces/config.type';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private readonly redis: Redis;
  private readonly logger = new Logger('redis');
  constructor(private readonly configService: ConfigService<IConfig>) {
    const redisUrl = this.configService.get<string>('redis.url', {
      infer: true,
    });
    if (!redisUrl) throw new Error('Redis URL is not configured');
    this.redis = new Redis(redisUrl);
  }
  async onModuleInit() {
    await this.redis.ping();
    this.logger.log('redis is connected');
  }

  async onModuleDestroy() {
    await this.redis.quit();
    this.logger.log('redis is disconnected');
  }

  async set<T>(key: string, value: T, ttl: number = 3600): Promise<void> {
    const serializedValue = this.defaultSerialize<T>(value);
    await this.redis.set(key, serializedValue, 'EX', ttl);
  }

  async get<T>(key: string): Promise<T | null> {
    const cachedValue = await this.redis.get(key);
    return cachedValue ? this.defaultDeserialize<T>(cachedValue) : null;
  }

  async delete(key: string): Promise<void> {
    await this.redis.del(key);
  }
  private defaultSerialize<T>(value: T): string {
    switch (typeof value) {
      case 'string':
        return value;
      case 'number':
      case 'boolean':
        return String(value);
      case 'undefined':
        throw new BadRequestException(
          'cant set an undefined value in the the cache',
        );
      case 'object':
        if (value === null) {
          throw new BadRequestException('cant set a null value in the cache');
        }
        return JSON.stringify(value);
      case 'function':
        throw new Error('Functions cannot be serialized');
      case 'symbol':
        throw new Error('Symbols cannot be serialized');
      default:
        return JSON.stringify(value);
    }
  }

  private defaultDeserialize<T>(value: string): T {
    try {
      return JSON.parse(value) as T;
    } catch {
      return value as T;
    }
  }
}
