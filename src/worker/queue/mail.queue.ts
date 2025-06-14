import { WorkerHost, Processor, OnWorkerEvent } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { QUEUE_NAME } from 'src/common/constants/queues.name';

@Processor(QUEUE_NAME.MAIL_QUEUE, { concurrency: 3 })
export class MailQueue extends WorkerHost {
  logger = new Logger(`${QUEUE_NAME.MAIL_QUEUE}`);
  async process(job: Job) {
    await new Promise(() => setTimeout(() => this.logger.log(job.name), 5000));
  }

  @OnWorkerEvent('completed')
  onComplete(job: Job) {
    this.logger.log(`the job with id:${job.id} has been completed`);
  }

  @OnWorkerEvent('failed')
  onFailed(job: Job) {
    this.logger.log(
      `the job with id:${job.id} has been faild for ${job.attemptsMade} times`,
    );
  }
}
