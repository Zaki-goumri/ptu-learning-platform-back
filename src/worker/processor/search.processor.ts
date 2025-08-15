import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { QUEUE_NAME } from 'src/common/constants/queues.name';
import { SEARCH_JOB_NAME, IndexDocumentJob, UpdateDocumentJob, DeleteDocumentJob } from 'src/common/constants/search-jobs.name';
import { SearchService } from 'src/search/search.service';
import { Logger } from '@nestjs/common';

@Processor(QUEUE_NAME.SEARCH_QUEUE)
export class SearchProcessor extends WorkerHost {
  private readonly logger = new Logger(SearchProcessor.name);

  constructor(private readonly searchService: SearchService) {
    super();
  }

  async process(job: Job<any>): Promise<any> {
    this.logger.log(`Processing job ${job.id} of type ${job.name}`);
    switch (job.name) {
      case SEARCH_JOB_NAME.INDEX_DOCUMENT:
        const indexJob = job.data as IndexDocumentJob<any>;
        await this.searchService.indexDocument(
          indexJob.index,
          indexJob.id,
          indexJob.document,
        );
        this.logger.log(`Indexed document ${indexJob.id} in index ${indexJob.index}`);
        break;
      case SEARCH_JOB_NAME.UPDATE_DOCUMENT:
        const updateJob = job.data as UpdateDocumentJob<any>;
        await this.searchService.updateDocument(
          updateJob.index,
          updateJob.id,
          updateJob.document,
        );
        this.logger.log(`Updated document ${updateJob.id} in index ${updateJob.index}`);
        break;
      case SEARCH_JOB_NAME.DELETE_DOCUMENT:
        const deleteJob = job.data as DeleteDocumentJob;
        await this.searchService.deleteDocument(
          deleteJob.index,
          deleteJob.id,
        );
        this.logger.log(`Deleted document ${deleteJob.id} from index ${deleteJob.index}`);
        break;
      default:
        this.logger.warn(`Unknown job name: ${job.name}`);
        break;
    }
  }

  @OnWorkerEvent('completed')
  onCompleted(job: Job) {
    this.logger.log(`Job ${job.id} of type ${job.name} completed.`);
  }

  @OnWorkerEvent('failed')
  onFailed(job: Job, err: Error) {
    this.logger.error(`Job ${job.id} of type ${job.name} failed: ${err.message}`, err.stack);
  }
}
