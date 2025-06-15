import {
    IsString,
    IsEmail,
    IsNotEmpty,
    MinLength,
    IsOptional,
    IsEnum,
    IsStrongPassword,
    IsMobilePhone,
  } from 'class-validator';
  import { Type } from 'class-transformer';
  import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
  import { UserRole, USER_ROLES } from 'src/user/types/user-role.type';
  /**
   * csv file row dto
   * @example {
   *   "firstName": "John",
   *   "lastName": "Doe",
   *   "email": "john.doe@example.com",
   *   "phoneNumber": "+1234567890",
   *   "userRole": "student",
   *   "department": "Computer Science",
   *   "yearGroup": "Year 1",
   *   "courses": ["Introduction to Computer Science"]
   * }
   */
  export class CsvRowDto {
    @ApiProperty({
      example: 'user@example.com',
      description: 'The email of the user',
    })
    @IsEmail({}, { message: 'Email must be a valid email address' })
    @IsNotEmpty({ message: 'Email is required' })
    @Type(() => String)
    email: string;
  
    @ApiProperty({
      example: 'urFRzux',
      description: 'The password of the user ',
      minLength: 8,
    })
    @IsString({ message: 'Password must be a string ' })
    @IsNotEmpty({ message: 'password cant be empty' })
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    @IsStrongPassword()
    @Type(() => String)
    password: string;
  
    @ApiProperty({ example: 'John', description: 'The first name of the user' })
    @IsString({ message: 'First name must be a string' })
    @IsNotEmpty({ message: 'First name is required' })
    @Type(() => String)
    firstName: string;
  
    @ApiProperty({ example: 'Doe', description: 'The last name of the user' })
    @IsString({ message: 'Last name must be a string' })
    @IsNotEmpty({ message: 'Last name is required' })
    @Type(() => String)
    lastName: string;
  
    @ApiProperty({
      example: USER_ROLES.STUDENT,
      enum: USER_ROLES,
      description: 'The role of the user',
    })
    @IsEnum(USER_ROLES, { message: 'User role must be either student or staff' })
    @IsNotEmpty({ message: 'User role is required' })
    @Type(() => String)
    role: UserRole;
  
    @ApiProperty({ example: '+213560620999' })
    @IsString()
    @IsMobilePhone('ar-DZ')
    phoneNumber: string;
  
    @ApiPropertyOptional({ example: 'Computer Science' })
    @IsString()
    @IsOptional()
    department?: string;
  
    @ApiProperty({
      type: [String],
      example: ['Introduction to Computer Science'],
    })
    @IsString({ each: true })
    courses: string[];
  
    @ApiProperty({ example: 'Year 1' })
    @IsString()
    yearGroup: string;
  }
  