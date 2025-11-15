import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { RootModule } from './application/di/Root.module';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);

  app.enableCors({
    origin: [process.env.APP_URL],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove propriedades não mapeadas no DTO
      forbidNonWhitelisted: true, // retorna erro para propriedades não mapeadas
      transform: true, // converte tipos de dados automaticamente
    }),
  );
  await app.listen(process.env.PORT ?? 3344);
}
bootstrap();
