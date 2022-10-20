// import { Injectable } from '@nestjs/common';

// @Injectable() // Для того, чтобы класс стал провайдером (затем мы этот класс будет внедрять в контроллер (делать инъекцию))
// export class AppService {
//   getUsers(){
//     return [{ id: 1, name: 'Serega' }]; 
//   }
// } Не нужно, тк систему будем декомпозировать на отдельные подмодули, которые потом заимпортируем в главный app.module
