import { BullModule } from '@nestjs/bullmq';
import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

import { SearchService } from './search.service';

@Global()
@Module({
  imports: [
    ElasticsearchModule.registerAsync({
      inject: [ConfigService],
      imports: [ConfigModule],
      useFactory: (ConfigService: ConfigService) => ({
        node: ConfigService.get('elasticSearch.node'),
        pingTimeout: ConfigService.get('elasticSearch.timeout'),
        auth: {
          username: ConfigService.get('elasticSearch.auth.username')!,
          password: ConfigService.get('elasticSearch.auth.password')!,
        },
        tls: {
          //WARNING:This is not secure for production
          rejectUnauthorized: false,
        },
      }),
    }),
  ],
  providers: [SearchService],
  exports: [SearchService, ElasticsearchModule, BullModule],
})
export class SearchModule {}
