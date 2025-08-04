import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class Course {
  @ApiProperty({
    example: 'course_123e4567-e89b-12d3-a456-426614174000',
    description: 'Unique identifier for the course',
  })
  @Field()
  id: string;

  @ApiProperty({
    example: 'Advanced JavaScript Programming',
    description: 'The title/name of the course',
  })
  @Field()
  title: string;

  @ApiProperty({
    example:
      'An in-depth course covering advanced JavaScript concepts including async programming, design patterns, and modern ES6+ features.',
    description: 'Detailed description of the course content and objectives',
  })
  @Field()
  description: string;

  @ApiProperty({
    example: 'instructor_456e7890-e12c-34d5-b678-539725285111',
    description: 'Unique identifier of the instructor teaching this course',
  })
  @Field()
  instrucatorId: string;

  @ApiProperty({
    example: 'semester_789f0123-f45d-67e8-c901-642836396222',
    description:
      'Unique identifier of the semester when this course is offered',
  })
  @Field()
  semesterId: string;

  @ApiProperty({
    example: 'dept_012g3456-g78e-90f1-d234-753947407333',
    description:
      'Unique identifier of the academic department offering this course',
  })
  @Field()
  departmenetId: string;

  @ApiProperty({
    example: 'courseinfo_345h6789-h01f-23g4-e567-864058518444',
    description:
      'Unique identifier linking to additional course information and metadata',
  })
  @Field()
  courseInfoId: string;

  @ApiProperty({
    example: 'https://example.com/images/courses/javascript-cover.jpg',
    description: 'URL or path to the course cover image',
  })
  @Field()
  coverPic: string;

  @ApiProperty({
    example: true,
    description:
      'Boolean flag indicating whether the course is published and visible to students',
  })
  @Field()
  isPublished: boolean;

  @ApiProperty({
    example: '2024-01-15T08:30:00.000Z',
    description: 'Timestamp when the course was created',
  })
  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @ApiProperty({
    example: '2024-02-20T14:45:00.000Z',
    description: 'Timestamp when the course was last updated',
  })
  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
