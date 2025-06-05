import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['warn', 'error', 'log'],
  });
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
