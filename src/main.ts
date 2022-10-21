import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';
import { ValidationPipe } from './pipes/validation.pipe';

async function start() {
  const PORT = process.env.PORT || 5000; // Определяем порт, если не определится, то по умолчанию будет 5000
  const app = await NestFactory.create(AppModule); // Экземпляр приложения

  const config = new DocumentBuilder()
    .setTitle('Продвинутый BACKEND')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .addTag('Sergey')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  // app.useGlobalGuards(JwtAuthGuard); // Для того, чтобы сделать доступность только зарегистрированным пользователям. (гвардов может быть несколько)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, () => console.log(`Server started on port=${PORT}`));
}

start();
