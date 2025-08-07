import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { PaginationQueryDto } from 'src/common/dtos/pagination.dto';
import { RedisService } from 'src/redis/redis.service';
import { UpdateCourseInput } from './dtos/requests/update-course';
import { CreateCourseInput } from './dtos/requests/create-course';
import { PaginatedCoursesResponse } from './types/pagination-courses.gql';

@Injectable()
export class CoursesService {
  private static readonly CACHE_PREFIX = 'course';

  static getCourseCacheKey(criteria: string | number): string {
    return `${CoursesService.CACHE_PREFIX}:${criteria}`;
  }

  constructor(
    @InjectRepository(Course)
    private readonly courseRepositry: Repository<Course>,
    private readonly redisService: RedisService,
  ) {}

  async create(createDto: CreateCourseInput) {
    const course = this.courseRepositry.create(createDto);
    return this.courseRepositry.save(course);
  }
  async findOne(id: string) {
    const cachedCourse = await this.redisService.get<Course>(
      CoursesService.getCourseCacheKey(id),
    );
    if (cachedCourse) return cachedCourse;
    const course = await this.courseRepositry.findOneBy({ id });
    if (!course) throw new NotFoundException('course not found');
    await this.redisService.set<Course>(
      CoursesService.getCourseCacheKey(id),
      course,
    );
    return course;
  }
  async findMany(paginationDto: PaginationQueryDto) {
    const { page = 10, limit = 10 } = paginationDto;
    const [data, total] = await this.courseRepositry.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      relations: ['user'],
    });
    return new PaginatedCoursesResponse(data, total, page, limit);
  }
  async remove(courseId: string) {
    await this.redisService.delete(CoursesService.getCourseCacheKey(courseId));
    await this.courseRepositry.delete({ id: courseId });
    return { deleted: false };
  }

  async update(updateCourseDto: UpdateCourseInput, id: string) {
    const { affected } = await this.courseRepositry.update(id, updateCourseDto);
    if (!affected) throw new NotFoundException('course not found');
    const updateCourse = await this.courseRepositry.findOneBy({ id });
    await this.redisService.delete(CoursesService.getCourseCacheKey(id));
    return updateCourse;
  }
}
