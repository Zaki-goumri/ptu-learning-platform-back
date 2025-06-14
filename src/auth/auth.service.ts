import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  Logger,
  HttpException,
  HttpStatus,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SigninDto } from './dto/requests/sign-in.dto';
import { UserService } from 'src/user/user.service';
import { ConfigService } from '@nestjs/config';
import { IJwt } from 'src/config/interfaces/jwt.type';
import { omit } from 'lodash';
import { compareHash, generateHash } from 'src/common/utils/hash.utils';
import { SignupDto } from './dto/requests/sign-up.dto';
import { AuthDto } from './dto/response/auth-response';
import csv from 'csv-parser';
import { Readable } from 'stream';

@Injectable()
export class AuthService {
  private readonly logger = new Logger('auth');
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
    private configService: ConfigService,
  ) {}
  async signin(signinDto: SigninDto): Promise<AuthDto> {
    const { email, password } = signinDto;
    const user = await this.userService.findOneByEmail(email);
    if (!user) throw new NotFoundException(' user not found');
    const isPasswordMatched = await compareHash(password, user.password);
    if (!isPasswordMatched)
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

  async signup(signupDto: SignupDto) {
    try {
      const hashedPassword = await generateHash(signupDto.password);
      const user = await this.userService.create({
        ...signupDto,
        password: hashedPassword,
      });

      const jwtConfig = this.configService.get<IJwt>('jwt');
      const accessTokenPayload = {
        sub: user.id,
        role: user.role,
        email: user.email,
      };
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
    } catch (error: unknown) {
      if (error instanceof Error && error.name === 'QueryFailedError') {
        if (
          error.message.includes(
            'duplicate key value violates unique constraint',
          )
        ) {
          throw new ConflictException('user already exist');
        } else {
          throw new HttpException(
            'Something went wrong, please try again',
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }
      } else {
        throw error;
      }
    }
  }
  async bulkSignup(
    file: Express.Multer.File,
    options: {
      skipDuplicates: boolean;
      tempPassword: boolean;
      welcomeEmail: boolean;
    },
  ) {
    const stringified = file.buffer.toString('utf-8');
    const parsed: unknown = await this.parseCsv(stringified);
    return this.userService.bulkCreate(
      parsed as Omit<SignupDto, 'password'>[],
      options,
    );
  }
  private async parseCsv(csvString: string) {
    return new Promise((resolve, reject) => {
      try {
        const results: Record<string, string>[] = [];
        Readable.from(csvString)
          .pipe(csv())
          .on('data', (data: Record<string, string>) => {
            results.push(data);
          })
          .on('end', () => {
            resolve(results);
          });
      } catch (error: unknown) {
        console.error('Error parsing CSV file:', error);
        reject(new Error('Error parsing CSV file'));
      }
    });
  }

  async refresh() {}
  async welcomeEmail() {}
}
