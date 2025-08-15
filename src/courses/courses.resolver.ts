import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CoursesService } from './courses.service';
import { Course } from './types/course.gql';
import { Injectable, UseGuards } from '@nestjs/common';
import { CreateCourseInput } from './dtos/requests/create-course';
import { UpdateCourseInput } from './dtos/requests/update-course';
import { RemoveCourseResponse } from './types/remove-course.gql';
import { PaginatedCoursesResponse } from './types/pagination-courses.gql';
import { EnrollmentService } from './enrollement.service';
import { Enrollment } from './types/enrollement.gql';
import { AccessTokenGuard } from 'src/auth/guards/access-token.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
import { USER_ROLES } from 'src/user/types/user-role.type';
import { Roles } from 'src/auth/decorators/role.decorator';

@Resolver()
@UseGuards(AccessTokenGuard, RoleGuard)
export class CoursesResolver {
  constructor(
    private readonly coursesService: CoursesService,
    private readonly enrollementService: EnrollmentService,
  ) {}

  // GET /courses (list all courses)
  @Query(() => PaginatedCoursesResponse, { name: 'courses' })
  async courses(
    @Args('page', { type: () => Int, nullable: true }) page?: number,
    @Args('limit', { type: () => Int, nullable: true }) limit?: number,
  ) {
    return await this.coursesService.findMany({ page, limit });
  }

  // GET /courses/:id (get course by id)
  // @Roles('any')
  @Query(() => Course, { name: 'course' })
  async course(@Args('id') id: string) {
    return await this.coursesService.findOne(id);
  }

  // POST /courses (teacher/admin)
  @Roles(USER_ROLES.ADMIN, USER_ROLES.TEACHER)
  @Mutation(() => Course)
  async createCourse(
    @Args('createCourseDto') createCourseDto: CreateCourseInput,
  ) {
    return await this.coursesService.create(createCourseDto);
  }

  // PATCH /courses/:id (teacher/admin)
  @Roles(USER_ROLES.ADMIN, USER_ROLES.TEACHER)
  @Mutation(() => Course, { nullable: true })
  async updateCourse(
    @Args('id') id: string,
    @Args('updateDto') updateCourseDto: UpdateCourseInput,
  ) {
    return await this.coursesService.update(updateCourseDto, id);
  }

  // DELETE /courses/:id (admin)
  @Roles(USER_ROLES.ADMIN, USER_ROLES.TEACHER)
  @Mutation(() => RemoveCourseResponse)
  async deleteCourse(@Args('id') id: string) {
    return await this.coursesService.remove(id);
  }

  // POST /courses/:id/enroll (student)
  @Roles(USER_ROLES.STUDENT)
  @Mutation(() => Enrollment)
  async enrollInCourse(
    @Args('courseId') courseId: string,
    @Args('studentId') studentId: string,
  ) {
    return await this.enrollementService.create(courseId, studentId);
  }
}
