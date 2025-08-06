import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { User } from 'src/user/types/user.gql';
import { Course } from './course.gql';
import {
  ENROLLMENT_STATUS,
  EnrollmentStatus,
} from '../types/enrollment-status.type';

registerEnumType(ENROLLMENT_STATUS, {
  name: 'EnrollmentStatus',
});

@ObjectType()
export class Enrollment {
  @Field(() => ID)
  id: string;

  @Field(() => User)
  student: User;

  @Field(() => Course)
  course: Course;

  @Field(() => ENROLLMENT_STATUS)
  status: EnrollmentStatus;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
