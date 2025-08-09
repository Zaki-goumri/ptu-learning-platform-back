import { WorkerHost, Processor, OnWorkerEvent } from '@nestjs/bullmq';
import { Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'bullmq';
import { Message } from 'src/chat/entities';
import { JOB_NAME } from 'src/common/constants/jobs.name';
import { QUEUE_NAME } from 'src/common/constants/queues.name';
import { Repository } from 'typeorm';

@Processor(QUEUE_NAME.MAIL_QUEUE, { concurrency: 3 })
export class MessageQueue extends WorkerHost {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepositry: Repository<Message>,
  ) {
    super();
  }
  logger = new Logger(`${QUEUE_NAME.MAIL_QUEUE}`);
  async process(job: Job<Message>) {
    if (!job?.data) throw new NotFoundException('there is no message pushed');
    switch (job.name) {
      case JOB_NAME.SAVE_MESSAGE:
        return await this.messageRepositry.save(job.data);
    }
  }

  @OnWorkerEvent('completed')
  onComplete(job: Job) {
    switch (job.name) {
      case JOB_NAME.SAVE_MESSAGE:
        return this.logger.log(`the job with id:${job.id} has been completed`);
    }
  }

  @OnWorkerEvent('failed')
  onFailed(job: Job) {
    switch (job.name) {
      case JOB_NAME.SAVE_MESSAGE:
        return this.logger.log(
          `the job with id:${job.id} has been faild for ${job.attemptsMade} times`,
        );
    }
  }
}
