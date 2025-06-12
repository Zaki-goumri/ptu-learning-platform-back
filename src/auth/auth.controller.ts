import { Controller, Post, Body, Query, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/requests/sign-in.dto';
import { SignupDto } from './dto/requests/sign-up.dto';
import { AccessTokenGuard } from './guards/access-token.guard';

@UseGuards(AccessTokenGuard)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  signin(@Body() signinDto: SigninDto) {
    return this.authService.signin({ ...signinDto });
  }

  @Post('/signup')
  signup(
    @Body() signupDto: SignupDto,
    @Query(' temporary-password') tempPassword: boolean,
    @Query(' welcome-email') welcomeEmail: boolean,
  ) {
    return this.authService.signup(signupDto, tempPassword, welcomeEmail);
  }

  @Post('/singup-many')
  signupMany() {}
}
