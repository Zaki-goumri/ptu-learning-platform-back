import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
/**
 * DTO for sign in to a user account.
 * @example {
 *   "email": "john.doe@example.com",
 *   "password": "zaki123",
 * }
 */

export class SigninDto {
  @ApiProperty({
    description: 'email of the user for sign in',
    example: 'zaki123@gmail.com',
  })
  @IsString({ message: 'Email must be a string ' })
  @IsNotEmpty({ message: 'email cant be empty' })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'password of the user for sign in',
    example: 'zaki123',
    minLength: 8,
  })
  @IsString({ message: 'Password must be a string ' })
  @IsNotEmpty({ message: 'Password cant be empty' })
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  password: string;
}
