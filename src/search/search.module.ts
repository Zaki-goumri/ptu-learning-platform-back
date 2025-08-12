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
          useFactory: (config: ConfigService) => ({
            node: config.get<string>('elasticSearch.node'),
            //pingTimeout: config.get<number>('elasticSearch.timeout') ?? 3000,
            //auth: {
            //username: config.get<string>('elasticSearch.auth.username')!,
            //password: config.get<string>('elasticSearch.auth.password')!,
            //},
            tls: {
              rejectUnauthorized: false,
            },
          }),
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
