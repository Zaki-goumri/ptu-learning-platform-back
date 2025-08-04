import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import {
  PaginatedResponseDto,
  PaginationQueryDto,
} from 'src/common/dtos/pagination.dto';
import { RedisService } from 'src/redis/redis.service';
import { UpdateCourseDto } from './dtos/requests/update-course';
import { CreateCourseInput } from './dtos/requests/create-course';

@Injectable()
export class CoursesService {
  private static readonly CACHE_PREFIX = 'course';

  static getCourseCacheKey(criteria: string | number): string {
    return `${CoursesService.CACHE_PREFIX}:${criteria}`;
  }

  constructor(
    @InjectRepository(Course)
    private readonly courseRepositry: Repository<Course>,
    private readonly userService: UserService,
    private readonly redisService: RedisService,
  ) {}

  async create(createDto: CreateCourseInput) {
    const teacher = await this.userService.findById(createDto.teacherId);
    if (!teacher) throw new NotFoundException('the teacher is not found');
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
    return new PaginatedResponseDto<Course>(data, total, page, limit);
  }
  async remove(courseId: string) {
    return await this.courseRepositry.delete({ id: courseId });
  }

  async update(updateCourseDto: UpdateCourseDto, id: string) {
    const { affected } = await this.courseRepositry.update(id, updateCourseDto);
    if (!affected) throw new NotFoundException('course not found');
    const updateCourse = await this.courseRepositry.findOneBy({ id });
    await this.redisService.delete(CoursesService.getCourseCacheKey(id));
    return updateCourse;
  }
}
