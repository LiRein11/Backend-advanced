// import { AppController } from "./app.controller";
// import { AppService } from "./app.service";

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/users.model";
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [], // Реализуются запросы на сервер
  providers: [], // Реализуется логика для других компонентов
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT), // Дефолт у постгрес.
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Role, UserRoles],
      autoLoadModels: true, // Для создания таблиц в БД на основании создаваемых моделей
    }),
    UsersModule,
    RolesModule,
    AuthModule,
  ], // Импорты других модулей
}) // Декоратор (обертка, которая добавляет классу или функции новый функционал)
export class AppModule {}