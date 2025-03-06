import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
