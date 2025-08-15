import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { SearchJobDataDto } from './search-job-data';
import { QUEUE_NAME } from 'src/common/constants/queues.name';
import { SEARCH_JOB_NAME } from 'src/common/constants/search-jobs.name';
import { SearchService } from 'src/search/search.service';

@Processor(QUEUE_NAME.SEARCH_QUEUE)
export class SearchProcessor extends WorkerHost {
  private readonly logger = new Logger(SearchProcessor.name);

  constructor(private readonly searchService: SearchService) {
    super();
  }

  async process(job: Job<SearchJobDataDto>): Promise<any> {
    this.logger.log(`Processing job: ${job.name} for index: ${job.data.index}`);

    try {
      switch (job.name) {
        case SEARCH_JOB_NAME.INDEX_DOCUMENT:
          this.logger.log(`Indexing document with ID: ${job.data.id}`);
          if (!job.data.id || !job.data.document) {
            throw new Error(
              'ID and document are required for index operations',
            );
          }
          return await this.searchService.indexDocument(job.data.index, {
            ...job.data.document,
            id: job.data.id,
          });

        case SEARCH_JOB_NAME.UPDATE_DOCUMENT:
          this.logger.log(`Updating document with ID: ${job.data.id}`);
          if (!job.data.id || !job.data.document) {
            throw new Error(
              'ID and document are required for update operations',
            );
          }
          return await this.searchService.updateDocument(
            job.data.index,
            job.data.id,
            job.data.document,
          );

        case SEARCH_JOB_NAME.DELETE_DOCUMENT:
          this.logger.log(`Deleting document with ID: ${job.data.id}`);
          if (!job.data.id) {
            throw new Error('ID is required for delete operations');
          }
          return await this.searchService.deleteDocument(
            job.data.index,
            job.data.id,
          );

        default:
          this.logger.warn(`Unknown job name: ${job.name}`);
          return Promise.resolve();
      }
    } catch (error) {
      this.logger.error(`Job ${job.name} failed:`, error);
      throw error;
    }
  }
}
