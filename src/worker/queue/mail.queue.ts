import { WorkerHost, Processor, OnWorkerEvent } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { QUEUE_NAME } from 'src/common/constants/queues.name';
import { MailService } from 'src/mail/mail.service';
import { User } from 'src/user/entities/user.entity';

@Processor(QUEUE_NAME.MAIL_QUEUE, { concurrency: 3 })
export class MailQueue extends WorkerHost {
  constructor(private readonly mailService: MailService) {
    super();
  }
  logger = new Logger(`${QUEUE_NAME.MAIL_QUEUE}`);
  async process(job: Job<User[]>) {
    await this.sendWelcomeEmail(job.data);
  }

  async sendWelcomeEmail(users: User[]) {
    await this.mailService.sendBulkWelcomeEmail(users);
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
