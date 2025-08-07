import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesResolver } from './courses.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { RedisModule } from 'src/redis/redis.module';
import { UserModule } from 'src/user/user.module';
import { EnrollmentService } from './enrollement.service';
import { Enrollment } from './entities/enrollment.entity';
import { EnrollmentController } from './enrollement.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Course, Enrollment]),
    RedisModule,
    UserModule,
  ],
  controllers: [EnrollmentController],
  providers: [CoursesResolver, CoursesService, EnrollmentService],
  exports:[TypeOrmModule]
})
export class CoursesModule {}
