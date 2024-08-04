import { UserRepository } from '../application/repositories/user.repository';
import { User } from '../application/domain/user.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../application/services/dto/CreateUserDto';
import { UpdateUserDto } from '../application/services/dto/UpdateUserDto';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  private users: Array<User> = [];

  async findById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id);
    if (user) {
      return user;
    }
    throw new NotFoundException();
  }

  async findAll(): Promise<Array<User>> {
    return this.users;
  }

  async createUser(dto: CreateUserDto): Promise<User> {
    const newId =
      this.users.length > 0
        ? (Number(this.users[this.users.length - 1].id) + 1).toString()
        : '1';

    const newUser: User = { id: newId, ...dto };

    this.users.push(newUser);
    return newUser;
  }

  async updateUser(dto: UpdateUserDto): Promise<User> {
    const user = this.users.find((user) => user.id === dto.id);

    if (!user) {
      throw new NotFoundException();
    }

    if (dto.email) {
      user.email = dto.email;
    }

    if (dto.name) {
      user.name = dto.name;
    }

    return user;
  }
}
