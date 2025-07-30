import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './config/appConfig';
import { Idb } from './config/interfaces/db.type';
import { DataSource } from 'typeorm';
import { UserModule } from './user/user.module';
import { RedisModule } from './redis/redis.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { IJwt } from './config/interfaces/jwt.type';
import { ThrottlerModule } from '@nestjs/throttler';
import { BullModule } from '@nestjs/bullmq';
import { IRedis } from './config/interfaces/redis.interface';
import { QUEUE_NAME } from './common/constants/queues.name';
import { MailQueue } from './worker/queue/mail.queue';
import { MailQueueEventListener } from './worker/event/mail.queue.event';
import { MailService } from './mail/mail.service';
import { ThrottlerStorageRedisService } from '@nest-lab/throttler-storage-redis';
import { ChatModule } from './chat/chat.module';
import { DepartementModule } from './departement/departement.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CoursesModule } from './courses/courses.module';
import { HybridThrottlerGuard } from './common/guards/throttler.guard';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      graphiql: true,
      autoSchemaFile: 'src/schema.graphql',
      context: ({ req, resp }) => ({ req, resp }),
    }),
    UserModule,
    ConfigModule.forRoot({
      load: [appConfig],
      isGlobal: true,
      cache: true,
      envFilePath: '.env',
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
    BullModule.registerQueue({ name: QUEUE_NAME.MAIL_QUEUE }),
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
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const jwtConfig = configService.get<IJwt>('secret');
        return {
          secret: jwtConfig?.secret,
          signOptions: { expiresIn: '1h' },
        };
      },
    }),
    DepartementModule,
    ChatModule,
    CoursesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    MailQueue,
    MailQueueEventListener,
    {
      provide: 'APP_GUARD',
      useClass: HybridThrottlerGuard,
    },
    MailService,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
