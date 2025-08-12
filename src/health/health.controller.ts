import { Controller, Get } from '@nestjs/common';
import {
  DiskHealthIndicator,
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  MemoryHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { ElasticsearchHealthIndicator } from './elasticsearch.health';
import { RedisCustomHealthIndicator } from './redis.health';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private disk: DiskHealthIndicator,
    private memory: MemoryHealthIndicator,
    private db: TypeOrmHealthIndicator,
    private elasticsearch: ElasticsearchHealthIndicator,
    private redis: RedisCustomHealthIndicator,
  ) {}
  //ADD you healthChecks Endpoints here
  //NOTE:this will be configurable later via the module itself to only define name and endpoint
  // Example: Check if the GitHub service is reachable
  @Get('db')
  @HealthCheck()
  checkDb() {
    return this.health.check([() => this.db.pingCheck('database')]);
  }

  @Get('redis')
  @HealthCheck()
  checkRedis() {
    return this.health.check([() => this.redis.isHealthy('redis')]);
  }

  @Get('elasticsearch')
  @HealthCheck()
  checkElasticsearch() {
    return this.health.check([
      () => this.elasticsearch.isHealthy('elasticsearch'),
    ]);
  }

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.db.pingCheck('database'),
      () => this.redis.isHealthy('redis'),
      () => this.elasticsearch.isHealthy('elasticsearch'),
      () => this.http.pingCheck('github', 'https://github.com'),
      () =>
        this.disk.checkStorage('disk health', {
          thresholdPercent: 0.9,
          path: '/',
        }),
      () => this.memory.checkHeap('memory heap', 150 * 1024 * 1024),
      () => this.memory.checkRSS('memory RSS', 300 * 1024 * 1024),
    ]);
  }
}
