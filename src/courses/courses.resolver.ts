import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { CoursesService } from './courses.service';
import { Course } from './types/course.type';
import { SkipThrottle } from '@nestjs/throttler';

@Resolver()
@SkipThrottle()
export class CoursesResolver {
  constructor(private readonly coursesService: CoursesService) {}
  @Query(() => Course, { name: 'courses' })
  getCourses() {
    const course = {
      id: 'c1a5f9d3-1234-4b67-89ef-987654321abc',
      title: 'Introduction to Artificial Intelligence',
      description:
        'An overview of fundamental AI concepts including search algorithms, knowledge representation, reasoning, and machine learning.',
      instrucatorId: 'u2b5f9d3-5678-4c89-a3ef-987654321def',
      semesterId: 'sem-2025-Spring',
      departmenetId: 'dep-CS',
      courseInfoId: 'ci-87654321-2025',
      coverPic: 'https://example.com/course-images/ai-introduction-cover.jpg',
      isPublished: true,
      createdAt: new Date('2025-01-15T10:30:00Z'),
      updatedAt: new Date('2025-07-25T15:45:00Z'),
    };
    return course;
  }

  @Mutation(() => Course)
  createCourse() {
    const course = {
      id: 'c1a5f9d3-1234-4b67-89ef-987654321abc',
      title: 'Introduction to Artificial Intelligence',
      description:
        'An overview of fundamental AI concepts including search algorithms, knowledge representation, reasoning, and machine learning.',
      instrucatorId: 'u2b5f9d3-5678-4c89-a3ef-987654321def',
      semesterId: 'sem-2025-Spring',
      departmenetId: 'dep-CS',
      courseInfoId: 'ci-87654321-2025',
      coverPic: 'https://example.com/course-images/ai-introduction-cover.jpg',
      isPublished: true,
      createdAt: new Date('2025-01-15T10:30:00Z'),
      updatedAt: new Date('2025-07-25T15:45:00Z'),
    };
    return course;
  }
}
