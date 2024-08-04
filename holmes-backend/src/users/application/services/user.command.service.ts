import { User } from '../domain/user.model';
import { CreateUserDto } from './dto/CreateUserDto';
import { UpdateUserDto } from './dto/UpdateUserDto';

// is it ok to be here? like in dependency point of view
export interface UserCommandService {
  createUser(dto: CreateUserDto): Promise<User>;
  updateUser(dto: UpdateUserDto): Promise<User>;
}

export const UserCommandServiceHandle = 'UserCommandService';
