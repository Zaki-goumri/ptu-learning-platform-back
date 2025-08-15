import {
  Field,
  GraphQLISODateTime,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import {
  UserRole,
  USER_ROLE_VALUES,
  USER_ROLES,
} from '../types/user-role.type';
import { Department } from '../../departement/types/departement.gql'; // Adjust path to your GraphQL Department type

registerEnumType(USER_ROLES, {
  name: 'UserRole',
  description: 'The role of the user',
  valuesMap: {
    ADMIN: {
      description: 'Administrator role',
    },
    STUDENT: {
      description: 'Student role',
    },
    TEACHER: {
      description: 'Teacher role',
    },
  },
});

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  phoneNumber: string;

  @Field(() => USER_ROLES)
  role: UserRole;

  @Field(() => String, { nullable: true })
  yearGroup: string | null;

  @Field(() => Department)
  departement: Department;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
