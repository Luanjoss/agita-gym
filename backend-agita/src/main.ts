import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // 1. Importe isso

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // 2. Esta linha ativa a validação automática em todo o projeto
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove campos extras que não estão no DTO
    forbidNonWhitelisted: true, // Dá erro se enviarem campos que não existem
    transform: true, // Transforma os tipos automaticamente
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();