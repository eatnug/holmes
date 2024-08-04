import { User } from '../domain/user.model';
import { CreateUserDto } from '../services/dto/CreateUserDto';
import { UpdateUserDto } from '../services/dto/UpdateUserDto';

export interface UserRepository {
  findById(id: string): Promise<User>;
  findAll(): Promise<Array<User>>;
  createUser(dto: CreateUserDto): Promise<User>;
  updateUser(dto: UpdateUserDto): Promise<User>;
}

export const USER_REPOSITORY_PORT = 'USER_REPOSITORY_PORT';
