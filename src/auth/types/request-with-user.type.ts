import { Request } from 'express';
import { User } from 'src/user/entities/user.entity';

export interface extendedReq extends Request {
  user: User;
}
export interface extendedUserWithJwt {
  user: User;
  accessToken: string;
  refreshToken: string;
}
