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
import { UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';

@UseFilters(new BaseWsExceptionFilter())
@UsePipes(
  new ValidationPipe({ exceptionFactory: (errors) => new WsException(errors) }),
)
@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  constructor(private readonly chatService: ChatService) {}

  handleConnection(client: Socket) {
    console.log('new user is connected', client.id);
  }

  handleDisconnect(client: any) {
    console.log('user disconnect ', client.id);
  }
  @SubscribeMessage('send')
  handleEvent(@ConnectedSocket() client: Socket, @MessageBody() data: string) {
    this.server.emit('reply', data);
  }
}
