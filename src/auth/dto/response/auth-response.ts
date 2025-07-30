import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
import { OmitType } from '@nestjs/swagger';

@Injectable()
export class AuthDto {
  @ApiProperty({
    description: 'acess token of the authorized user',
  })
  accessToken: string;

  @ApiProperty({
    description: 'refresh token of the authorized user',
  })
  refreshToken: string;

  @ApiProperty({
    description: 'user data for set it as global state and avoid refeching',
    type: OmitType(User, ['password', 'createdAt', 'updatedAt']),
  })
  user: Omit<User, 'password' | 'createdAt' | 'updatedAt'>;
}
