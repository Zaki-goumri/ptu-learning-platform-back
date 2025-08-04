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
import { Server } from 'socket.io';
import {
  Logger,
  UseFilters,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { WsAuthGuard } from './guards/ws-auth.guard';
import { IClient } from './types/client.type';

@UseGuards(WsAuthGuard)
@UseFilters(new BaseWsExceptionFilter())
@UsePipes(
  new ValidationPipe({ exceptionFactory: (errors) => new WsException(errors) }),
)
@WebSocketGateway(3001, { cors: { origin: '*' } })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger: Logger;
  @WebSocketServer() server: Server;
  constructor(private readonly chatService: ChatService) {}

  async handleConnection(client: IClient) {
    const user = client.data.user;
    const roomIds = await this.chatService.getUserRooms(user.sub);
    await Promise.all(
      roomIds.map(async (roomId) => {
        await client.join(roomId);
        this.logger.log(`User ${user.sub} joined room ${roomId}`);
      }),
    );
  }

  handleDisconnect(client: IClient) {
    if (client?.data?.user) {
      this.logger.log(
        `User disconnected: ${client.data.user.sub} (Socket: ${client.id})`,
      );
    } else {
      this.logger.warn(`Unknown client disconnected (Socket: ${client.id})`);
    }
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

    this.logger.log(
      `Message sent: [${message.id}] User ${user.sub} -> Room ${conversationId}`,
    );
    this.server.to(conversationId).emit('reply', {
      id: message.id,
      senderId: message.sender.id,
      content: message.content,
      createdAt: message.createdAt,
    });
  }
}
