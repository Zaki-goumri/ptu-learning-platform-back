import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/types/user.gql';

@ObjectType()
export class Course {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
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
    example: 'https://example.com/images/courses/javascript-cover.jpg',
    description: 'URL or path to the course cover image',
    required: false,
  })
  @Field({ nullable: true })
  coverImage?: string;

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

  @ApiProperty({
    description: 'The teacher/instructor assigned to this course',
    type: () => User,
  })
  @Field(() => User)
  teacher: User;
}
