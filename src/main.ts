import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 5000; // Определяем порт, если не определится, то по умолчанию будет 5000
  const app = await NestFactory.create(AppModule); // Экземпляр приложения

  await app.listen(PORT, ()=>console.log(`Server started on port=${PORT}`) )
}

start()