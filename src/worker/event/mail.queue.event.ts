import {
  OnQueueEvent,
  QueueEventsHost,
  QueueEventsListener,
} from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { QUEUE_NAME } from 'src/common/constants/queues.name';

@QueueEventsListener(QUEUE_NAME.MAIL_QUEUE)
export class MailQueueEventListener extends QueueEventsHost {
  private readonly logger = new Logger(QUEUE_NAME.MAIL_QUEUE);

  @OnQueueEvent('added')
  onAdded(job: { jobId: number; name: string }) {
    this.logger.log(
      `job with id ${job.jobId} has been added the queue ${QUEUE_NAME.MAIL_QUEUE}`,
    );
  }
}
