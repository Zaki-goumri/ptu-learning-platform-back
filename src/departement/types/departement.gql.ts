import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class Department {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'The unique identifier of the department',
  })
  @Field()
  id: string;

  @ApiProperty({
    example: 'computer science',
    description: 'Department is the major or speciality',
  })
  @Field()
  label: string;

  @ApiProperty({
    example: '2025-06-05T16:03:00Z',
    description: 'The creation timestamp of the department',
  })
  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @ApiProperty({
    example: '2025-06-05T16:03:00Z',
    description: 'The last update timestamp of the department',
  })
  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
