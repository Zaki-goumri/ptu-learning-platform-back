import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AchievementsService } from './achievements.service';
import { Achievement } from './entities/achievement.entity';
import { UserAchievement } from './entities/user-achievement.entity';

describe('AchievementsService', () => {
  let service: AchievementsService;
  let achievementRepository: Repository<Achievement>;
  let userAchievementRepository: Repository<UserAchievement>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AchievementsService,
        {
          provide: getRepositoryToken(Achievement),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(UserAchievement),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<AchievementsService>(AchievementsService);
    achievementRepository = module.get<Repository<Achievement>>(getRepositoryToken(Achievement));
    userAchievementRepository = module.get<Repository<UserAchievement>>(getRepositoryToken(UserAchievement));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have findAll method with pagination', () => {
    expect(service.findAll).toBeDefined();
  });

  it('should have findUserAchievements method with pagination', () => {
    expect(service.findUserAchievements).toBeDefined();
  });
}); 