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
  private readonly subClient: Redis;
  private readonly pubClient: Redis;
  private readonly logger = new Logger('redis');
  constructor(private readonly configService: ConfigService<IConfig>) {
    const redisUrl = this.configService.get<string>('redis.url', {
      infer: true,
    });
    if (!redisUrl) throw new Error('Redis URL is not configured');
    this.redis = new Redis(redisUrl);
    this.subClient = new Redis(redisUrl);
    this.pubClient = new Redis(redisUrl);
  }

  async onModuleInit() {
    await this.redis.ping();
    await this.pubClient.ping();
    await this.subClient.ping();
    this.logger.log('Redis connections established');
  }

  async onModuleDestroy() {
    await Promise.all([
      this.redis.quit(),
      this.pubClient.quit(),
      this.subClient.quit(),
    ]);
    this.logger.log('Redis connections closed');
  }

  async publish<T>(channel: string, payload: T) {
    const data = this.defaultSerialize<T>(payload);
    await this.pubClient.publish(channel, data);
  }

  async subscribe<T>(channel: string, onMessage: (data) => void) {
    await this.subClient.subscribe(channel, (err) => {
      if (err) {
        this.logger.error(`Failed to subscribe to ${channel}:`, err);
        return;
      }
      this.logger.log(`Subscribed to channel: ${channel}`);
    });

    this.subClient.on('message', (chan, message) => {
      if (chan === channel) {
        const parsed = this.defaultDeserialize<T>(message);
        onMessage(parsed);
      }
    });
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
