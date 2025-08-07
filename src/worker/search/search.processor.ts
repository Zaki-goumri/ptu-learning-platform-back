import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';

import { SearchJobDataDto } from './search-job-data';
import { QUEUE_NAME } from 'src/common/constants/queues.name';
import { JOB_NAME } from 'src/common/constants/jobs.name';
import { SearchService } from 'src/search/search.service';

@Processor(QUEUE_NAME.SEARCH_QUEUE)
export class SearchProcessor extends WorkerHost {
  logger = new Logger(SearchProcessor.name);
  constructor(private readonly searchService: SearchService) {
    super();
  }
  process(job: Job<SearchJobDataDto>): Promise<any> {
    this.logger.log('Processing job: ' + job.name);
    switch (job.name) {
      case JOB_NAME.INDEX_SEARCH:
        this.logger.log('Indexing data');
        return this.searchService.index(job.data.index, job.data.body);
      case JOB_NAME.DELETE_INDEX:
        this.logger.log('Deleting indexed Data');
        return this.searchService.delete(job.data.index, job.data.body);
      default:
        return Promise.resolve();
    }
  }
}
