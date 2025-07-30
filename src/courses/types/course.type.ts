import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Course {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;
  @Field()
  instrucatorId: string;

  @Field()
  semesterId: string;

  @Field()
  departmenetId: string;

  @Field()
  courseInfoId: string;

  @Field()
  coverPic: string;

  @Field()
  isPublished: boolean;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
