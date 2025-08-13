import { Injectable } from '@nestjs/common';
import {
  HealthIndicator,
  HealthIndicatorResult,
  HealthCheckError,
} from '@nestjs/terminus';
import { SearchService } from '../search/search.service';

@Injectable()
export class ElasticsearchHealthIndicator extends HealthIndicator {
  constructor(private readonly searchService: SearchService) {
    super();
  }

  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    try {
      await this.searchService['elasticSearchService'].ping();
      return this.getStatus(key, true);
    } catch (err) {
      throw new HealthCheckError('Elasticsearch health check failed', err);
    }
  }
}
