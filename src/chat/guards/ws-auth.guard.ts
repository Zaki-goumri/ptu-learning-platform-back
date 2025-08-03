import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { WsException } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { IClient } from '../types/client.type';
import { IAcessTokenPayload } from 'src/auth/types/token-payload.type';

@Injectable()
export class WsAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const client: Socket = context.switchToWs().getClient<Socket>();
    const authorization = client.handshake.query.token as string;
    const token = authorization?.trim().split(' ')[1];
    if (!token) throw new WsException('user not authenticated');
    const payload = this.jwtService.verify<IAcessTokenPayload>(token);
    (client as IClient).data.user = payload;
    return true;
  }
}
