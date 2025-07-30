import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesResolver } from './courses.resolver';

@Module({
  providers: [CoursesResolver, CoursesService],
})
export class CoursesModule {}
