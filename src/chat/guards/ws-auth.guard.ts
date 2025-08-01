import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Socket } from 'socket.io';
import { IAcessTokenPayload } from 'src/auth/types/token-payload.type';

interface IClient extends Socket {
  user: IAcessTokenPayload;
}

@Injectable()
export class WsAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const client: Socket = context.switchToWs().getClient<Socket>();
    const authorization = client.handshake.headers.authorization as string;
    const token = authorization.trim().split(' ')[1];
    if (!token) throw new UnauthorizedException('user not authenticated');
    const payload = this.jwtService.verify<IAcessTokenPayload>(token);
    (client as IClient).user = payload;
    return true;
  }
}
