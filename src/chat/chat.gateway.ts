import {
  BaseWsExceptionFilter,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
  WsException,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import {
  UseFilters,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { WsAuthGuard } from './guards/ws-auth.guard';

@UseGuards(WsAuthGuard)
@UseFilters(new BaseWsExceptionFilter())
@UsePipes(
  new ValidationPipe({ exceptionFactory: (errors) => new WsException(errors) }),
)
@WebSocketGateway(3001, { cors: { origin: '*' } })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  constructor(private readonly chatService: ChatService) {}

  handleConnection(client: Socket) {
    console.log('new user is connected', client.id);
  }

  handleDisconnect(client: any) {
    console.log('user disconnect ', client.id as string);
  }
  @SubscribeMessage('send')
  handleEvent(@ConnectedSocket() client: Socket, @MessageBody() data: string) {
    this.server.emit('reply', data);
  }
}
