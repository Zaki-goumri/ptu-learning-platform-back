import { BullModule } from '@nestjs/bullmq';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

import { SearchService } from './search.service';
import { QUEUE_NAME } from 'src/common/constants/queues.name';

export interface SearchModuleOptions {
  queueName?: string;
}

@Global()
@Module({})
export class SearchModule {
  static registerAsync(options?: SearchModuleOptions): DynamicModule {
    return {
      module: SearchModule,
      imports: [
        ConfigModule,
        ElasticsearchModule.registerAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (config: ConfigService) => {
            // Get from structured config first, then fallback to direct env var
            const elasticsearchConfig = config.get('elasticSearch');
            const node =
              elasticsearchConfig?.node ||
              config.get<string>('ELASTICSEARCH_NODE');

            console.log('Elasticsearch Node Configuration:', node); // Debug log

            if (!node) {
              throw new Error(
                'Elasticsearch node configuration is missing. Please set ELASTICSEARCH_NODE environment variable or add elasticSearch.node to your config.',
              );
            }

            const esConfig = {
              node: node,
              pingTimeout: elasticsearchConfig?.timeout ?? 3000,
              auth: elasticsearchConfig?.auth?.username
                ? {
                    username: elasticsearchConfig.auth.username,
                    password: elasticsearchConfig.auth.password,
                  }
                : undefined,
              tls: {
                rejectUnauthorized: false,
              },
            };

            console.log('Final Elasticsearch Config:', {
              ...esConfig,
              auth: esConfig.auth ? '***hidden***' : undefined,
            }); // Debug log

            return esConfig;
          },
        }),
        BullModule.registerQueue({
          name: options?.queueName ?? QUEUE_NAME.SEARCH_QUEUE,
        }),
      ],
      providers: [SearchService],
      exports: [SearchService, ElasticsearchModule, BullModule],
    };
  }
}
