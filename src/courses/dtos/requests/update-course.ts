import { PartialType } from '@nestjs/swagger';
import { CreateCourseDto } from './create-course';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
