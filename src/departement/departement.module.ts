import { Module } from '@nestjs/common';
import { DepartementService } from './departement.service';
import { DepartementController } from './departement.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './entities/departement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  controllers: [DepartementController],
  providers: [DepartementService],
  exports: [DepartementService],
})
export class DepartementModule {}
