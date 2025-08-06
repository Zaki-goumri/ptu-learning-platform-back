import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RemoveCourseResponse {
  @Field(() => Int, { nullable: true, description: 'Number of affected rows' })
  affected?: number;

  @Field(() => [String], {
    nullable: true,
    description: 'Generated identifiers',
  })
  generatedMaps?: string[];

  @Field(() => [String], { nullable: true, description: 'Raw results' })
  raw?: string[];
}
