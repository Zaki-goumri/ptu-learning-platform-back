import { AuthGuard } from '@nestjs/passport';

export class AccessTokenGuard extends AuthGuard('refresh-token') {}
