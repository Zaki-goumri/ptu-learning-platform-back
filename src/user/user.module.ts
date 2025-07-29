import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { BullModule } from '@nestjs/bullmq';
import { QUEUE_NAME } from 'src/common/constants/queues.name';
import { DepartementModule } from 'src/departement/departement.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    BullModule.registerQueue({ name: QUEUE_NAME.MAIL_QUEUE }),
    DepartementModule,
  ],
  exports: [TypeOrmModule, UserService],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
