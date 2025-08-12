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
import { NotificationsService } from 'src/notifications/notifications.service';

@UseGuards(WsAuthGuard)
@UseFilters(new BaseWsExceptionFilter())
@UsePipes(
  new ValidationPipe({ exceptionFactory: (errors) => new WsException(errors) }),
)
@WebSocketGateway(3001, { cors: { origin: '*' } })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger: Logger;
  @WebSocketServer() server: Server;
  constructor(
    private readonly chatService: ChatService,
    private readonly notificationService: NotificationsService,
  ) {}

  private onlineUsers = new Map<string, IClient>();
  private roomMembers = new Map<string, Set<string>>();

  async handleConnection(client: IClient) {
    const user = client.data.user;
    this.onlineUsers.set(user.sub, client);
    const roomIds = await this.chatService.getUserRooms(user.sub);
    await Promise.all(
      roomIds.map(async (roomId) => {
        await client.join(roomId);
        if (!this.roomMembers.has(roomId)) {
          this.roomMembers.set(roomId, new Set());
        }
        this.logger.log(`User ${user.sub} joined room ${roomId}`);
      }),
    );
  }

  handleDisconnect(client: IClient) {
    const userId = client?.data?.user?.sub;
    if (!userId) return;
    this.onlineUsers.delete(userId);
    for (const members of this.roomMembers.values()) {
      members.delete(userId);
    }
    this.logger.log(
      `User disconnected: ${client.data.user.sub} (Socket: ${client.id})`,
    );
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
    if (!isMember) throw new WsException('The user is not a member');

    const message = await this.chatService.create({
      senderId: user.sub,
      content,
      conversationId,
    });

    this.logger.log(
      `Message sent: [${message.id}] User ${user.sub} -> Room ${conversationId}`,
    );

    const members = await this.chatService.getRoomMembers(conversationId);

    for (const member of members) {
      if (member.id === user.sub) continue;

      this.server
        .to(member.id)
        .timeout(2000)
        .emit(
          'reply',
          {
            id: message.id,
            senderId: message.sender.id,
            content: message.content,
            createdAt: message.createdAt,
          },
          async (err: unknown) => {
            if (err) {
              await this.notificationService.create({
                userId: member.id,
                title: 'NEW_MESSAGE',
                content: message.content,
              });
              await this.notificationService.notify({
                userId: member.id,
                title: 'NEW_MESSAGE',
                content: message.content,
              });
            }
          },
        );
    }
  }
}
