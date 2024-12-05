import "./instrument";

import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

import { AppModule } from './app.module';


async function bootstrap(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('{{ applicationName }}')
    .setDescription('')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  return app;
}
export const viteNodeApp = bootstrap();

async function main(): Promise<INestApplication> {
  const app = await viteNodeApp;
  const defaultPort = {{port}};

  return await app.listen(defaultPort);
}

if (import.meta.env.PROD) {
  const server = await main();

  process.on('SIGTERM', async () => {
    // eslint-disable-next-line no-console
    console.info('SIGTERM signal received.');
    // eslint-disable-next-line no-console
    console.log('Closing http server.');
    await server.close();
    // eslint-disable-next-line no-console
    console.log('Http server closed.');
  });
}
