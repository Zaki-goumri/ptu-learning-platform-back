import { UserRole } from 'src/user/types/user-role.type';

export interface ITokenPayload {
  sub: number;
  role: UserRole;
}
/*eslint-disable*/
export interface IAcessTokenPayload extends ITokenPayload {}

export interface IRefreshTokenPayload extends ITokenPayload {}
