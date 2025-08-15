import { generateRandomCode } from 'src/common/utils/string.utils';
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
import { CsvParserService } from 'src/common/services/csv-parser.service';
import { User } from 'src/user/entities/user.entity';
import { RedisService } from 'src/redis/redis.service';
import { minutes, Throttle } from '@nestjs/throttler';
import { QUEUE_NAME } from 'src/common/constants/queues.name';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { JOB_NAME } from 'src/common/constants/jobs.name';
import { LOGGER } from 'src/common/constants/logger.name';
import { Optional } from 'src/common/types/optional.type';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(LOGGER.AUTH);

  static getOtpKey(id: string) {
    return `otp:${id}`;
  }
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
    private configService: ConfigService,
    private redisService: RedisService,
    private csvParserService: CsvParserService,
    @InjectQueue(QUEUE_NAME.MAIL_QUEUE) private readonly mailQueue: Queue,
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
    const parsed: unknown = await this.csvParserService.parseCsv(stringified);
    return this.userService.bulkCreate(
      parsed as Optional<SignupDto, 'password'>[],
      options,
    );
  }

  async refresh(payload: User) {
    const accessTokenPayload = {
      sub: payload.id,
      role: payload.role,
      email: payload.email,
    };
    const jwtConfig = this.configService.get<IJwt>('jwt');
    const refreshTokenPayload = { sub: payload.id };
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
    };
  }
  @Throttle({ default: { limit: 3, ttl: minutes(1) } })
  async generateOtp(email: string) {
    const user = await this.userService.findOneByEmail(email);
    if (!user) throw new NotFoundException('this email is not found ');
    const otp = generateRandomCode(6, '0123456789');
    await this.redisService.set<string>(
      AuthService.getOtpKey(user.id),
      otp,
      minutes(1),
    );
    await this.mailQueue.add(JOB_NAME.SEND_OTP_EMAIL, { email, otp });
    return 'otp is sent';
  }

  @Throttle({ default: { limit: 3, ttl: minutes(1) } })
  async validateOtp(sentOtp: string, userId: string) {
    const cachedOtp = await this.redisService.get<string>(
      AuthService.getOtpKey(userId),
    );
    if (!cachedOtp) throw new NotFoundException('otp is expired ');
    return cachedOtp === sentOtp;
  }
}