import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import { ValidationPipe } from '@nestjs/common';
import { LoggerInterceptor } from './global/interceptors/logging.interceptor';
import { LoggerBuilder } from 'src/common/logging/winston.logger';
import { ConfigService } from '@nestjs/config';
import { IApp } from './config/interfaces/app.type';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const { port, env } = configService.get<IApp>('app') ?? { port: 3000, env: 'development' };
  app.useLogger(
    env == 'STAGING' || env == 'PRODUCTION'
      ? new LoggerBuilder().setJobName('core').build()
      : ['log', 'error', 'warn', 'debug', 'verbose'],
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.useGlobalInterceptors(new LoggerInterceptor());
  const config = new DocumentBuilder()
    .setTitle('Ptu api docs')
    .setDescription('this is the api docs of ptu  ')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  app.use(
    '/api',
    apiReference({ spec: { content: document, theme: 'purple' } }),
  );
  await app.listen(port);
}
bootstrap();
