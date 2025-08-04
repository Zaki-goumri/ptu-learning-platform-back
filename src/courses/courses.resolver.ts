import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CoursesService } from './courses.service';
import { Course } from './types/course.type';
import { SkipThrottle } from '@nestjs/throttler';
import { Injectable } from '@nestjs/common';
import { CreateCourseInput } from './dtos/requests/create-course';
import { UpdateCourseDto } from './dtos/requests/update-course';

@Resolver()
@SkipThrottle()
@Injectable()
export class CoursesResolver {
  constructor(private readonly coursesService: CoursesService) {}
  @Query(() => Course, { name: 'courses' })
  getCourses(@Args('id') id: string) {
    const course = this.coursesService.findOne(id);
    return course;
  }

  @Mutation(() => Course)
  createCourse(@Args('createCourseDto') createCourseDto: CreateCourseInput) {
    return this.coursesService.create(createCourseDto);
  }

  @Mutation(() => Course)
  async updateCourse(
    @Args('updateDto') updateCourseDto: UpdateCourseDto,
    @Args('id') id: string,
  ) {
    return await this.coursesService.update(updateCourseDto, id);
  }
  @Mutation()
  async remove(@Args('id') id: string) {
    return this.coursesService.remove(id);
  }
}
