import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { User } from 'src/user/types/user.gql';

@ObjectType()
export class Course {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  coverImage?: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field(() => User)
  teacher: User;
}
