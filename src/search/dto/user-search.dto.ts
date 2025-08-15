import { ApiProperty } from '@nestjs/swagger';

export class UserSearchDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty({ required: false })
  departmentLabel?: string;

  @ApiProperty({ required: false })
  role?: string;

  @ApiProperty({ required: false })
  phoneNumber?: string;

  @ApiProperty({ required: false })
  fullName?: string;
}
