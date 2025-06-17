import { Module } from '@nestjs/common';
import { DepartementService } from './departement.service';
import { DepartementController } from './departement.controller';

@Module({
  controllers: [DepartementController],
  providers: [DepartementService],
})
export class DepartementModule {}
