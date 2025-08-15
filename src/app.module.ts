import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './config/appConfig';
import { Idb } from './config/interfaces/db.type';
import { UserModule } from './user/user.module';
import { RedisModule } from './redis/redis.module';
import { AuthModule } from './auth/auth.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { BullModule } from '@nestjs/bullmq';
import { IRedis } from './config/interfaces/redis.interface';
import { ThrottlerStorageRedisService } from '@nest-lab/throttler-storage-redis';
import { ChatModule } from './chat/chat.module';
import { DepartementModule } from './departement/departement.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CoursesModule } from './courses/courses.module';
import { HybridThrottlerGuard } from './common/guards/throttler.guard';
import { HealthModule } from './health/health.module';
import { NotificationsModule } from './notifications/notifications.module';
import { AttendanceModule } from './attendance/attendance.module';
import { AchievementsModule } from './achievements/achievements.module';
import { ScheduleModule } from './schedule/schedule.module';
import { QuizModule } from './quiz/quiz.module';
import { SearchModule } from './search/search.module';

import { WorkerModule } from './worker/worker.module';

@Module({
  imports: [
    HealthModule,
    SearchModule.registerAsync(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      graphiql: true,
      autoSchemaFile: 'src/schema.graphql',
      /*eslint-disable*/
      context: ({ req, resp }) => ({ req, resp }),
    }),
    UserModule,
    ConfigModule.forRoot({
      load: [appConfig],
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const dbConfig = configService.get<Idb>('db');
        return {
          ...dbConfig,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
        };
      },
    }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const redisConfig = configService.get<IRedis>('redis');
        return {
          connection: { ...redisConfig },
          defaultJobOptions: {
            attempts: 3,
            backoff: 5000,
            removeOnComplete: 3000,
            removeOnFail: 1000,
          },
        };
      },
    }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          name: 'short',
          ttl: 5000,
          limit: 5,
        },
        {
          name: 'medium',
          ttl: 1000 * 30,
          limit: 10,
        },
        {
          name: 'long',
          ttl: 1000 * 60,
          limit: 25,
        },
      ],
      storage: new ThrottlerStorageRedisService({
        host: 'redis',
        port: 6379,
      }),
    }),
    RedisModule,
    AuthModule,
    DepartementModule,
    ChatModule,
    CoursesModule,
    NotificationsModule,
    AttendanceModule,
    AchievementsModule,
    ScheduleModule,
    QuizModule,
    WorkerModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'APP_GUARD',
      useClass: HybridThrottlerGuard,
    },
  ],
})
export class AppModule {
  constructor() {}
}
