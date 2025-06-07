import { Test, TestingModule } from '@nestjs/testing';
import { RedisService } from './redis.service';

describe('Redis', () => {
  let provider: RedisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedisService],
    }).compile();

    provider = module.get<RedisService>(RedisService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
