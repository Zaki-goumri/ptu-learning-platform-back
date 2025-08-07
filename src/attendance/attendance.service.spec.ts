import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AttendanceService } from './attendance.service';
import { Attendance } from './entities/attendance.entity';

describe('AttendanceService', () => {
  let service: AttendanceService;
  let repository: Repository<Attendance>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AttendanceService,
        {
          provide: getRepositoryToken(Attendance),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<AttendanceService>(AttendanceService);
    repository = module.get<Repository<Attendance>>(getRepositoryToken(Attendance));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
}); 