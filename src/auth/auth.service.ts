import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SigninDto } from './dto/requests/sign-in.dto';
import { UserService } from 'src/user/user.service';
import { ConfigService } from '@nestjs/config';
import { IJwt } from 'src/config/interfaces/jwt.type';
import { omit } from 'lodash';
import { compareHash } from 'src/common/utils/hash.utils';
import { SignupDto } from './dto/requests/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  async signin(signinDto: SigninDto) {
    const { email, password } = signinDto;
    const user = await this.userService.findOneByEmail(email);
    if (!user) throw new NotFoundException(' user not found');

    const isPasswordMatched = await compareHash(password, user.password);
    if (isPasswordMatched)
      throw new UnauthorizedException('wrong email or password');
    const accessTokenPayload = {
      sub: user.id,
      role: user.role,
      email: user.email,
    };
    const jwtConfig = this.configService.get<IJwt>('jwt');
    const refreshTokenPayload = { sub: user.id };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.sign(accessTokenPayload, {
        secret: jwtConfig?.secret,
        expiresIn: '1h',
      }),
      this.jwtService.sign(refreshTokenPayload, {
        secret: jwtConfig?.secret,
        expiresIn: '7d',
      }),
    ]);
    return {
      accessToken,
      refreshToken,
      user: omit(user, ['password', 'updatedAt', 'createdAt']),
    };
  }

  async signup(
    signupDto: SignupDto,
    tempPassword: boolean,
    welcomeEmail: boolean,
  ) {}
  async signupMany() {}
  async refresh() {}
  async welcomeEmail() {}

  generateTempPassword(): string {
    const length = 8;
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}
