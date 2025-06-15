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
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { BullModule } from '@nestjs/bullmq';
import { IRedis } from './config/interfaces/redis.interface';
import { QUEUE_NAME } from './common/constants/queues.name';
import { MailQueue } from './worker/queue/mail.queue';
import { MailQueueEventListener } from './worker/event/mail.queue.event';
import { MailService } from './mail/mail.service';
@Module({
  imports: [
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
          ttl: 5000,
          limit: 3,
        },
      ],
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
  ],
  controllers: [AppController],
  providers: [
    AppService,
    MailQueue,
    MailQueueEventListener,
    {
      provide: 'APP_GUARD',
      useClass: ThrottlerGuard,
    },
    MailService,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
