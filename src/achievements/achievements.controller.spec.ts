import { Test, TestingModule } from '@nestjs/testing';
import { AchievementsController } from './achievements.controller';
import { AchievementsService } from './achievements.service';

describe('AchievementsController', () => {
  let controller: AchievementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AchievementsController],
      providers: [
        {
          provide: AchievementsService,
          useValue: {
            findAll: jest.fn(),
            findUserAchievements: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<AchievementsController>(AchievementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should have findAll method with pagination', () => {
    expect(controller.findAll).toBeDefined();
  });

  it('should have findUserAchievements method with pagination', () => {
    expect(controller.findUserAchievements).toBeDefined();
  });
}); 