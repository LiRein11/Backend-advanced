import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'Почта' })
  readonly email: string;
  @ApiProperty({ example: '12345678', description: 'Пароль пользователя' })
  readonly password: string;
} // Дто это простой объект,который не содержит никакой логики и имеет только поля, предназначен для обмена данными между какими-то подсистемами, например клиент и сервер или сервер-сервер
