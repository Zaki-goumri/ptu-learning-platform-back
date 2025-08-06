import { InputType, PartialType } from '@nestjs/graphql';
import { CreateCourseInput } from './create-course';
@InputType()
export class UpdateCourseInput extends PartialType(CreateCourseInput) {}
