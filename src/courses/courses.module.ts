import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesResolver } from './courses.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { RedisModule } from 'src/redis/redis.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Course]), RedisModule, UserModule],
  providers: [CoursesResolver, CoursesService],
})
export class CoursesModule {}
