import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import { ValidationPipe } from '@nestjs/common';
import { LoggerInterceptor } from './global/interceptors/logging.interceptor';
import { LoggerBuilder } from 'src/common/logging/winston.logger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger:
      process.env.ENV == 'STAGING' || process.env.ENV == 'PRODUCTION'
        ? new LoggerBuilder().setJobName('core').build()
        : ['log', 'error', 'warn', 'debug', 'verbose'],
  });
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
  app.use('/api', apiReference({ content: document }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
