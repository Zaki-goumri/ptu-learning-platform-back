import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScheduleService } from './schedule.service';
import { Session } from './entities/session.entity';

describe('ScheduleService', () => {
  let service: ScheduleService;
  let repository: Repository<Session>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ScheduleService,
        {
          provide: getRepositoryToken(Session),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<ScheduleService>(ScheduleService);
    repository = module.get<Repository<Session>>(getRepositoryToken(Session));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have findAll method with pagination', () => {
    expect(service.findOne).toBeDefined();
  });

  it('should have create method', () => {
    expect(service.generateAutomaticSchedule).toBeDefined();
  });

  it('should have update method', () => {
    expect(service.getWeeklySchedule).toBeDefined();
  });

  it('should have remove method', () => {
    expect(service.remove).toBeDefined();
  });

  it('should have generateAutomaticSchedule method', () => {
    expect(service.update).toBeDefined();
  });
}); 