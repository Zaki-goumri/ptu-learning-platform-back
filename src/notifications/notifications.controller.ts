import {
  Controller,
  Get,
  Patch,
  Param,
  Delete,
  Body,
  Query,
  HttpCode,
  HttpStatus,
  UseGuards,
  Sse,
} from '@nestjs/common';
import { INotification, NotificationsService } from './notifications.service';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import {
  ApiOperation,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiInternalServerErrorResponse,
  ApiTooManyRequestsResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PaginationQueryDto } from 'src/common/dtos/pagination.dto';
import { AccessTokenGuard } from 'src/auth/guards/access-token.guard';
import { User as UserExtractor } from 'src/auth/decorators/user.decorator';
import { User } from 'src/user/entities/user.entity';
import { Observable } from 'rxjs';
import { RedisService } from 'src/redis/redis.service';

@ApiTags('notifications')
@ApiTooManyRequestsResponse({
  description: 'Rate limiting: Too Many Requests',
  example: 'ThrottlerException: Too Many Requests',
})
@ApiNotFoundResponse({
  description: 'Notification not found',
  example: 'Notification with id ${id} not found',
})
@ApiInternalServerErrorResponse({
  description: 'Internal server error',
  example: 'internal server error',
})
@Controller('notifications')
//@UseGuards(AccessTokenGuard)
export class NotificationsController {
  constructor(
    private readonly notificationsService: NotificationsService,
    private readonly redisService: RedisService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all notifications' })
  @ApiOkResponse({ description: 'Notifications fetched successfully' })
  @Get()
  async findMany(@Query() query: PaginationQueryDto) {
    return await this.notificationsService.findMany(query);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update a notification by id' })
  @ApiOkResponse({ description: 'Notification updated successfully' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateNotificationDto: UpdateNotificationDto,
  ) {
    return await this.notificationsService.update(id, updateNotificationDto);
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete a notification by id' })
  @ApiOkResponse({ description: 'Notification deleted successfully' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.notificationsService.remove(id);
  }

  @Get('/test')
  async test() {
    const testMessage: INotification = {
      type: 'NEW_MESSAGE',
      userId: 'user-id-123',
      content: 'You got a message',
    };
    await this.notificationsService.notify(testMessage);
  }

  @Sse('/:userId/stream')
  stream(
    @Param('userId') userId: string,
  ): Observable<MessageEvent<INotification>> {
    const channel = 'notifications';

    return new Observable<MessageEvent<INotification>>((observer) => {
      const onMessage = (message: INotification) => {
        if (message.userId === userId) {
          observer.next({
            data: message,
          } as MessageEvent<INotification>);
        }
      };

      this.redisService
        .subscribe<INotification>(channel, onMessage)
        .then(() => {
          console.log(`Subscribed to Redis channel: ${channel}`);
        })
        .catch((error) => {
          console.error(
            `Error subscribing to Redis channel "${channel}":`,
            error,
          );
          observer.error(error);
        });

      return () => {
        console.log(`Client with userId ${userId} disconnected from SSE`);
      };
    });
  }
}
