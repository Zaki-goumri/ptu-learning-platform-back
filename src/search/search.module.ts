import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ISearch } from 'src/config/interfaces/search.type';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';

@Module({
  controllers: [SearchController]
})
export class SearchModule {
  static registerAsync() {
    return {
      module: SearchModule,
      imports: [
        ElasticsearchModule.registerAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => {
            const esConfig = configService.get<ISearch>('elasticSearch');
            return {
              node: esConfig?.node || 'http://localhost:9200',
            };
          },
        }),
      ],
      providers: [SearchService],
      exports: [SearchService],
    };
  }
}