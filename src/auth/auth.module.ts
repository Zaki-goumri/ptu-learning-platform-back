import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { AcessTokenStrategy } from './strategies/acess-token.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { RefreshTokenStrategy } from './strategies/refresh-token.strategy';

@Module({
  imports: [UserModule, PassportModule, JwtModule],
  controllers: [AuthController],
  providers: [AuthService, AcessTokenStrategy, RefreshTokenStrategy],
})
export class AuthModule {}
