import { CreateUserDto } from 'src/user/dto/create-user.dto';
/**
 * DTO for creating a single user account.
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
export class SignupDto extends CreateUserDto {}
