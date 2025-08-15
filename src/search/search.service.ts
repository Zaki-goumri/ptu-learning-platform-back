import {
  Injectable,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { SearchResponseDto } from './dto/search-query.dto';

@Injectable()
export class SearchService {
  private readonly logger = new Logger(SearchService.name);

  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async indexDocument<T extends { id: string }>(
    index: string,
    document: T,
  ): Promise<any> {
    try {
      const { id, ...documentBody } = document;

      const response = await this.elasticsearchService.index({
        index,
        id,
        document: {
          ...documentBody,
          ...((document && typeof document === 'object' && 'firstName' in document && 'lastName' in document && (document as any).firstName && (document as any).lastName) ? {
              fullName: `${(document as any).firstName} ${(document as any).lastName}`,
            } : {}),
        },
      });

      this.logger.log(`Indexed document with ID: ${id} in index: ${index}`);
      return response;
    } catch (error) {
      this.logger.error(`Failed to index document in ${index}:`, error);
      throw new InternalServerErrorException(
        `Index operation failed: ${error.message}`,
      );
    }
  }

  async updateDocument<T>(
    index: string,
    id: string,
    document: Partial<T>,
  ): Promise<any> {
    try {
      // Handle full name update for user documents
      const updateDoc = { ...document };
      if ((document && typeof document === 'object' && ('firstName' in document || 'lastName' in document))) {
        // Get existing document to merge firstName/lastName for fullName
        try {
          const existing = await this.elasticsearchService.get({
            index,
            id,
          });
          const existingSource = existing._source as any;
          const firstName = (document as any).firstName || existingSource?.firstName || '';
          const lastName = (document as any).lastName || existingSource?.lastName || '';
          if (firstName && lastName) {
            (updateDoc as any).fullName = `${firstName} ${lastName}`;
          }
        } catch (getError) {
          // Document might not exist, that's ok
        }
      }

      const response = await this.elasticsearchService.update({
        index,
        id,
        doc: updateDoc,
      });

      this.logger.log(`Updated document with ID: ${id} in index: ${index}`);
      return response;
    } catch (error) {
      this.logger.error(`Failed to update document in ${index}:`, error);
      throw new InternalServerErrorException(
        `Update operation failed: ${error.message}`,
      );
    }
  }

  async deleteDocument(index: string, id: string): Promise<any> {
    try {
      const response = await this.elasticsearchService.delete({
        index,
        id,
      });

      this.logger.log(`Deleted document with ID: ${id} from index: ${index}`);
      return response;
    } catch (error) {
      this.logger.error(`Failed to delete document from ${index}:`, error);
      throw new InternalServerErrorException(
        `Delete operation failed: ${error.message}`,
      );
    }
  }

  async search<T>(
    index: string,
    query: string,
    fields: string[],
    page: number = 1,
    limit: number = 10,
  ): Promise<SearchResponseDto<T>> {
    try {
      const from = (page - 1) * limit;

      const searchQuery = {
        multi_match: {
          query,
          fields,
          type: 'best_fields' as 'best_fields',
          fuzziness: 'AUTO',
        },
      };

      const response = await this.elasticsearchService.search({
        index,
        query: searchQuery,
        from,
        size: limit,
        highlight: {
          fields: fields.reduce(
            (acc, field) => {
              acc[field] = {};
              return acc;
            },
            {} as Record<string, any>,
          ),
        },
      });

      const hits = response.hits.hits.map((hit) =>
        (typeof hit._source === 'object' ? {
          ...hit._source,
          _score: hit._score,
          _highlights: hit.highlight,
        } : {
          _score: hit._score,
          _highlights: hit.highlight,
        })
      ) as T[];

      const total =
        typeof response.hits.total === 'number'
          ? response.hits.total
          : (response.hits.total?.value ?? 0);

      return new SearchResponseDto(hits, total, page, limit, response.took);
    } catch (error) {
      this.logger.error(`Search failed for index ${index}:`, error);
      throw new InternalServerErrorException(
        `Search operation failed: ${error.message}`,
      );
    }
  }

  async searchUsers(
    query: string,
    page: number = 1,
    limit: number = 10,
  ): Promise<SearchResponseDto<any>> {
    const searchFields = [
      'firstName^2',
      'lastName^2',
      'fullName^3',
      'email^1.5',
      'departmentLabel',
      'role',
    ];

    return this.search('users', query, searchFields, page, limit);
  }

  async createIndexIfNotExists(index: string, mappings?: any): Promise<void> {
    try {
      const exists = await this.elasticsearchService.indices.exists({ index });
      if (!exists) {
        await this.elasticsearchService.indices.create({
          index,
          mappings: mappings || this.getDefaultUserMappings(),
        });
        this.logger.log(`Created index: ${index}`);
      }
    } catch (error) {
      this.logger.error(`Failed to create index ${index}:`, error);
      throw new InternalServerErrorException(
        `Create index failed: ${error.message}`,
      );
    }
  }

  private getDefaultUserMappings() {
    return {
      properties: {
        id: { type: 'keyword' },
        email: { type: 'text', analyzer: 'standard' },
        firstName: { type: 'text', analyzer: 'standard' },
        lastName: { type: 'text', analyzer: 'standard' },
        fullName: { type: 'text', analyzer: 'standard' },
        departmentLabel: { type: 'text', analyzer: 'standard' },
        role: { type: 'keyword' },
        phoneNumber: { type: 'keyword' },
      },
    };
  }

  async healthCheck(): Promise<boolean> {
    try {
      await this.elasticsearchService.ping();
      return true;
    } catch {
      return false;
    }
  }
}
