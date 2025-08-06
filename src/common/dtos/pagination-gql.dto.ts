import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PaginationMeta {
  @Field(() => Int, { description: 'Total number of items' })
  total: number;

  @Field(() => Int, { description: 'Current page number' })
  page: number;

  @Field(() => Int, { description: 'Number of items per page' })
  limit: number;

  @Field(() => Int, { description: 'Total number of pages' })
  totalPages: number;
}

@ObjectType({ isAbstract: true })
export abstract class PaginatedGqlResponse {
  @Field(() => PaginationMeta, { description: 'Pagination metadata' })
  meta: PaginationMeta;

  constructor(total: number, page: number, limit: number) {
    this.meta = {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }
}
