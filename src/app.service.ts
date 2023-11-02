import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { editUserDto } from './dto/user.dto';
@Injectable()
export class AppService {
  private users: User[] = [
    {
      id: '1',
      name: 'Julian',
      surname: 'Fernandez',
      age: 21,
    },
  ];

  GetAllUsers() {
    return this.users;
  }

  GetUserById(id: string) {
    const user = this.users.find((u) => u.id == id);
    return user;
  }

  createUser(name: string, surname: string, age: number) {
    const user: User = {
      id: Date.now().toString(),
      name,
      surname,
      age,
    };
    return this.users.push(user);
  }

  deleteUser(id: string) {
    const userD = this.users.filter((u) => u.id != id);
    this.users = userD;
    return null;
  }

  editUser(id: string, editUserDto: editUserDto): User | null {
    const userIndex = this.users.findIndex((u) => u.id === id);

    if (userIndex !== -1) {
      const user = this.users[userIndex];
      user.name = editUserDto.name;
      user.surname = editUserDto.surname;
      user.age = editUserDto.age;

      return user;
    } else {
      return null;
    }
  }
}
