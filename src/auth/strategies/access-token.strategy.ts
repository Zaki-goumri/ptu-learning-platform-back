import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../../user/user.service';
import { ConfigService } from '@nestjs/config';
import { AccessRes, IAcessTokenPayload } from '../types/token-payload.type';

@Injectable()
export class AcessTokenStrategy extends PassportStrategy(
  Strategy,
  'access-token',
) {
  constructor(
    private userService: UserService,
    configService: ConfigService,
  ) {
    const jwtSecret = configService.get<string>('jwt.secret', { infer: true });
    if (!jwtSecret) {
      throw new Error('JWT secret is not defined');
    }
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  validate(payload: IAcessTokenPayload): AccessRes {
    if (!payload || !payload.sub) {
      throw new UnauthorizedException('Invalid token payload');
    }
    return { id: payload.sub, ...payload };
  }
}
