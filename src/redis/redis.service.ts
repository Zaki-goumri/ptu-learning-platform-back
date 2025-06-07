import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';
import { ConfigService } from '@nestjs/config';
import { IConfig } from 'src/config/interfaces/config.type';
@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private readonly redis: Redis;
  constructor(private readonly configService: ConfigService<IConfig>) {
    const redisUrl = this.configService.get<string>('redis.url', {
      infer: true,
    });
    if (!redisUrl) throw new Error('Redis URL is not configured');
    this.redis = new Redis(redisUrl);
  }
  async onModuleInit() {
    await this.redis.ping();
    console.log('redis is connected');
  }

  async onModuleDestroy() {
    await this.redis.quit();
    console.log('redis is disconnected');
  }

  async set(key: string, value: string, ttl: number = 3600): Promise<void> {
    await this.redis.set(key, value, 'EX', ttl);
  }

  async get(key: string): Promise<string | null> {
    return this.redis.get(key);
  }

  async delete(key: string): Promise<void> {
    await this.redis.del(key);
  }
}
