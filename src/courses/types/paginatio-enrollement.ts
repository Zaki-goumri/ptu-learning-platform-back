import { Field, ObjectType } from '@nestjs/graphql';
import { PaginatedGqlResponse } from 'src/common/dtos/pagination-gql.dto';
import { Enrollment } from './enrollement.gql';

@ObjectType()
export class PaginatedEnorllementResponse extends PaginatedGqlResponse {
  @Field(() => [Enrollment], { description: 'Array of courses' })
  data: Enrollment[];

  constructor(data: Enrollment[], total: number, page: number, limit: number) {
    super(total, page, limit);
    this.data = data;
  }
}
