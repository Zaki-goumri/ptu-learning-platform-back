import {
  Injectable,
  InternalServerErrorException,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService implements OnModuleInit {
  logger = new Logger('SearchService');
  constructor(private readonly elasticSearchService: ElasticsearchService) {}
  onModuleInit() {
    this.elasticSearchService
      .ping()
      .then(() => {
        this.logger.log('Elasticsearch is up and running');
      })
      .catch((e) => {
        this.logger.error('Elasticsearch is down');
        this.logger.error(e);
        throw new InternalServerErrorException();
      });
  }
  //TODO:add type to the query
  async search<T>(index: string, query: any) {
    {
      try {
        const res = await this.elasticSearchService.search<T>({
          body: {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            query: query,
          },

          index: index,
        });
        return res.hits.hits.map((hit) => hit._source);
      } catch (error) {
        this.logger.error(error);
        throw new InternalServerErrorException();
      }
    }
  }

  // TODO Fix issues with request/response types
  async index<T extends { id: number }>(index: string, body: T): Promise<any> {
    return this.elasticSearchService.index<T>({
      index: index,
      body: { ...body, id: undefined }, // Ensure id is not undefined
      id: String(body.id),
    });
  }

  async delete(index: string, query: any) {
    await this.elasticSearchService.deleteByQuery({
      index: index,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      body: { query },
    });
  }
}
