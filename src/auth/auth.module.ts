import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { AcessTokenStrategy } from './strategies/acess-token.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { RefreshTokenStrategy } from './strategies/refresh-token.strategy';
import { BullModule } from '@nestjs/bullmq';
import { RedisModule } from 'src/redis/redis.module';
import { QUEUE_NAME } from 'src/common/constants/queues.name';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule,
    RedisModule,
    BullModule.registerQueue({ name: QUEUE_NAME.MAIL_QUEUE }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AcessTokenStrategy, RefreshTokenStrategy],
})
export class AuthModule {}
