import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async indexDocument<T>(index: string, id: string, document: T) {
    return this.elasticsearchService.index<T>({
      index,
      id,
      document,
    });
  }

  async updateDocument<T>(index: string, id: string, document: Partial<T>) {
    return this.elasticsearchService.update<T>({
      index,
      id,
      doc: document,
    });
  }

  async deleteDocument(index: string, id: string) {
    return this.elasticsearchService.delete({
      index,
      id,
    });
  }

  async search<T>(index: string, query: string, fields: string[]): Promise<T[]> {
    const { hits } = await this.elasticsearchService.search<T>({
      index,
      query: {
        multi_match: {
          query,
          fields,
        },
      },
    });
    return hits.hits.map((hit) => hit._source).filter((doc) => doc !== undefined) as T[];
  }
}