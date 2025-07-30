import { Test, TestingModule } from '@nestjs/testing';
import { DepartementController } from './departement.controller';
import { DepartementService } from './departement.service';

describe('DepartementController', () => {
  let controller: DepartementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartementController],
      providers: [DepartementService],
    }).compile();

    controller = module.get<DepartementController>(DepartementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
