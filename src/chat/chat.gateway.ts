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
import { IClient } from './types/client.type';
import { error } from 'console';

@UseGuards(WsAuthGuard)
@UseFilters(new BaseWsExceptionFilter())
@UsePipes(
  new ValidationPipe({ exceptionFactory: (errors) => new WsException(errors) }),
)
@WebSocketGateway(3001, { cors: { origin: '*' } })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  constructor(private readonly chatService: ChatService) {}

  handleConnection(client: IClient) {
    console.log('new user is connected', client.data.user.sub);
  }

  handleDisconnect(client: IClient) {
    console.log('user disconnect ', client.data.user.sub);
  }
  @SubscribeMessage('send')
  async handleEvent(
    @ConnectedSocket() client: IClient,
    @MessageBody()
    { conversationId, content }: { conversationId: string; content: string },
  ) {
    const user = client.data.user;
    const isMember = await this.chatService.checkMembership(
      user.sub,
      conversationId,
    );
    if (!isMember) throw new WsException('the user is not a member ');
    const message = await this.chatService.create({
      senderId: user.sub,
      content,
      conversationId,
    });
    this.server.to(conversationId).emit('reply', { message });
  }
}
