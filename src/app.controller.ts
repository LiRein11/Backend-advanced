import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {

  constructor(private appService: AppService){} // Инъекция чтобы использовать сервис внутри контроллера

  @Get('/users')
  getUsers(){
    return this.appService.getUsers()
  }
}
