import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// Стандартные модули ноды
import * as path from 'path';
import * as fs from 'fs';
// Установленный
import * as uuid from 'uuid';

@Injectable()
export class FilesService {
  async createFile(file): Promise<string> {
    try {
      const fileName = uuid.v4() + '.jpg';
      const filePath = path.resolve(__dirname, '..', 'static'); // dirname указывает на текущую папку, затем выход из неё и в папке static изображения
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      } // Если по этому пути ничего нет, то нужно создать папку
      fs.writeFileSync(path.join(filePath, fileName), file.buffer); // Запись файла в папку
      return fileName;
    } catch (e) {
      throw new HttpException(
        'Произошла ошибка при записи файла',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
