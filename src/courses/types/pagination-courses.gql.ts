import { Field, ObjectType } from '@nestjs/graphql';
import { PaginatedGqlResponse } from 'src/common/dtos/pagination-gql.dto';
import { Course } from './course.gql';

@ObjectType()
export class PaginatedCoursesResponse extends PaginatedGqlResponse {
  @Field(() => [Course], { description: 'Array of courses' })
  data: Course[];

  constructor(data: Course[], total: number, page: number, limit: number) {
    super(total, page, limit);
    this.data = data;
  }
}
