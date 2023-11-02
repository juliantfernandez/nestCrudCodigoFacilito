import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Patch,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { editUserDto } from './dto/user.dto';

@Controller()
export default class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('users')
  getAllUsers(): any {
    return this.appService.GetAllUsers();
  }

  @Get('users/:id')
  async getUserById(@Param('id') id: string) {
    const user = this.appService.GetUserById(id);
    if (user) {
      console.log(JSON.stringify(user, null, 2)); // Convierte el objeto en una cadena JSON
    } else {
      console.log('Usuario no encontrado');
    }
    return user;
  }

  @Post('users')
  createNewUser(name: string, surname: string, age: number): any {
    return this.appService.createUser(name, surname, age);
  }

  @Patch('users/:id')
  editUser(@Param('id') id: string, @Body() editUserDto: editUserDto) {
    return this.appService.editUser(id, editUserDto);
  }

  @Delete('users/:id')
  deleteUser(@Param('id') id: string): any {
    const result = this.appService.deleteUser(id);
    if (result === null) {
      return { message: 'Usuario eliminado con éxito' };
    } else {
      return { message: 'Usuario no encontrado' };
    }
  }
}
