import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  controllers: [AppController], // Реализуются запросы на сервер
  providers: [AppService], // Реализуется логика для других компонентов
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432, // Дефолт у постгрес.
      username: 'postgres',
      password: 'Zelender384127',
      database: 'backend-advanced',
      models: [],
      autoLoadModels: true // Для создания таблиц в БД на основании создаваемых моделей
    }),
  ], // Импорты других модулей
}) // Декоратор (обертка, которая добавляет классу или функции новый функционал)
export class AppModule {}