import { Test, TestingModule } from '@nestjs/testing';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';

describe('ScheduleController', () => {
  let controller: ScheduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScheduleController],
      providers: [
        {
          provide: ScheduleService,
          useValue: {
            findAll: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ScheduleController>(ScheduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should have findOne method', () => {
    expect(controller.findOne).toBeDefined();
  });

  it('should have generateAutomaticSchedule method', () => {
    expect(controller.generateAutomaticSchedule).toBeDefined();
  });

  it('should have getWeeklySchedule method', () => {
    expect(controller.getWeeklySchedule).toBeDefined();
  });

  it('should have remove method', () => {
    expect(controller.remove).toBeDefined();
  });

  it('should have update method', () => {
    expect(controller.update).toBeDefined();
  });
}); 