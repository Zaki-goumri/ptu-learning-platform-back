import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailQueue } from '../worker/queue/mail.queue';
import { MailQueueEventListener } from '../worker/event/mail.queue.event';

@Module({
  providers: [MailService, MailQueue, MailQueueEventListener],
  exports: [MailService],
})
export class MailModule {}
