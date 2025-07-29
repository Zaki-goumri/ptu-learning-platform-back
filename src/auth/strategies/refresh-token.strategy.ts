import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../../user/user.service';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/user/entities/user.entity';
import { IRefreshTokenPayload } from '../types/token-payload.type';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'refresh-token',
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

  async validate(
    payload: IRefreshTokenPayload,
  ): Promise<User | NotFoundException> {
    if (!payload || typeof payload?.sub !== 'number') {
      throw new UnauthorizedException('Invalid token payload');
    }
    const user = await this.userService.findById(payload.sub);
    if (!user) throw new UnauthorizedException('User not found');
    return user;
  }
}
