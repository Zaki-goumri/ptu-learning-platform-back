import { InputType, Field } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
  IsUUID,
  IsUrl,
  MaxLength,
} from 'class-validator';

@InputType()
export class CreateCourseInput {
  @Field(() => String, {
    description: 'The title/name of the course (3-100 characters)',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100, { message: 'Title must not exceed 100 characters' })
  title: string;

  @Field(() => String, {
    description:
      'Detailed description of the course content and objectives (10-1000 characters)',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(1000, { message: 'Description must not exceed 1000 characters' })
  description: string;

  @Field(() => String, {
    description: 'URL or path to the course cover image (must be a valid URL)',
  })
  @IsString()
  @IsNotEmpty()
  @IsUrl({}, { message: 'Cover page must be a valid URL' })
  coverPage: string;

  @Field(() => String, {
    description:
      'Unique identifier of the teacher/instructor for this course (must be a valid UUID)',
  })
  @IsString()
  @IsNotEmpty()
  @IsUUID(4, { message: 'Teacher ID must be a valid UUID' })
  teacherId: string;
}
