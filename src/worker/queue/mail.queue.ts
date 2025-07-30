import { WorkerHost, Processor, OnWorkerEvent } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { JOB_NAME } from 'src/common/constants/jobs.name';
import { QUEUE_NAME } from 'src/common/constants/queues.name';
import { MailService } from 'src/mail/mail.service';
import {
  OtpMailProps,
  WelcomeEmailProps,
} from 'src/mail/types/mail-props.types';

@Processor(QUEUE_NAME.MAIL_QUEUE, { concurrency: 3 })
export class MailQueue extends WorkerHost {
  constructor(private readonly mailService: MailService) {
    super();
  }
  logger = new Logger(`${QUEUE_NAME.MAIL_QUEUE}`);
  async process(job: Job<WelcomeEmailProps[] | OtpMailProps>) {
    switch (job.name) {
      case JOB_NAME.SEND_WELCOME_EMAIL:
        return await this.sendWelcomeEmail(job.data as WelcomeEmailProps[]);
      case JOB_NAME.SEND_OTP_EMAIL:
        return await this.sendOtpEmail(job.data as OtpMailProps);
    }
  }

  async sendWelcomeEmail(users: WelcomeEmailProps[]) {
    await this.mailService.sendBulkWelcomeEmail(users);
  }
  async sendOtpEmail(user: OtpMailProps) {
    await this.mailService.sendOtpEmail(user);
  }
  @OnWorkerEvent('completed')
  onComplete(job: Job) {
    switch (job.name) {
      case JOB_NAME.SEND_WELCOME_EMAIL:
        return this.logger.log(`the job with id:${job.id} has been completed`);
    }
  }

  @OnWorkerEvent('failed')
  onFailed(job: Job) {
    switch (job.name) {
      case JOB_NAME.SEND_WELCOME_EMAIL:
        return this.logger.log(
          `the job with id:${job.id} has been faild for ${job.attemptsMade} times`,
        );
    }
  }
}
