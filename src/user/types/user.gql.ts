import {
  Field,
  GraphQLISODateTime,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'The unique identifier of the user',
  })
  @Field()
  id: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'The email address of the user',
  })
  @Field()
  email: string;

  @ApiProperty({
    example: 'John',
    description: 'The first name of the user',
  })
  @Field()
  firstName: string;

  @ApiProperty({
    example: 'Doe',
    description: 'The last name of the user',
  })
  @Field()
  lastName: string;

  @ApiProperty({
    example: '+1234567890',
    description: 'The phone number of the user',
  })
  @Field()
  phoneNumber: string;

  @ApiProperty({
    example: 'STUDENT',
    description: 'The role of the user (e.g., ADMIN, STUDENT, TEACHER)',
    enum: USER_ROLE_VALUES,
  })
  @Field(() => USER_ROLES)
  role: UserRole;

  @ApiProperty({
    example: '2023',
    description: 'The year group of the user (optional)',
    nullable: true,
  })
  @Field(() => String, { nullable: true })
  yearGroup: string | null;

  @ApiProperty({
    example: 'Computer Science Department',
    description: 'The department of study',
  })
  @Field(() => Department)
  departement: Department;

  @ApiProperty({
    example: '2025-06-05T16:03:00Z',
    description: 'The creation timestamp of the user',
  })
  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @ApiProperty({
    example: '2025-06-05T16:03:00Z',
    description: 'The last update timestamp of the user',
  })
  @Field(() => GraphQLISODateTime)
  updatedAt: Date;
}
