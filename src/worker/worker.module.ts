import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { QUEUE_NAME } from 'src/common/constants/queues.name';
import { MailModule } from 'src/mail/mail.module';
import { SearchProcessor } from './processor/search.processor';
import { SearchModule } from 'src/search/search.module';

@Module({
  imports: [
    BullModule.registerQueue(
      { name: QUEUE_NAME.MAIL_QUEUE },
      { name: QUEUE_NAME.MESSAGE_QUEUE },
      { name: QUEUE_NAME.SEARCH_QUEUE },
    ),
    MailModule,
    SearchModule.registerAsync(),
  ],
  providers: [SearchProcessor],
  exports: [BullModule, MailModule],
})
export class WorkerModule {}
