import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { AcessTokenStrategy } from './strategies/access-token.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { RefreshTokenStrategy } from './strategies/refresh-token.strategy';
import { RedisModule } from 'src/redis/redis.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { IJwt } from 'src/config/interfaces/jwt.type';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const jwtConfig = configService.get<IJwt>('secret');
        return {
          secret: jwtConfig?.secret,
        };
      },
    }),
    RedisModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, AcessTokenStrategy, RefreshTokenStrategy],
})
export class AuthModule {}
