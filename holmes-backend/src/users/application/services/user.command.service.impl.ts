import { User } from '../domain/user.model';
import {
  UserRepositoryHandle,
  UserRepository,
} from '../repositories/user.repository';
import { Inject, Injectable } from '@nestjs/common';
import { UserCommandService } from './user.command.service';
import { CreateUserDto } from './dto/CreateUserDto';
import { UpdateUserDto } from './dto/UpdateUserDto';

@Injectable()
export class UserCommandServiceImpl implements UserCommandService {
  constructor(
    @Inject(UserRepositoryHandle)
    private readonly userRepository: UserRepository,
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    return this.userRepository.createUser(dto);
  }

  updateUser(dto: UpdateUserDto): Promise<User> {
    return this.userRepository.updateUser(dto);
  }
}
