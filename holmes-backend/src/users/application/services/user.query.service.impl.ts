import { User } from '../domain/user.model';
import { UserQueryService } from './user.query.service';
import {
  UserRepositoryHandle,
  UserRepository,
} from '../repositories/user.repository';
import { Inject, Injectable } from '@nestjs/common';
import { GetUserDto } from './dto/GetUserDto';

@Injectable()
export class UserQueryServiceImpl implements UserQueryService {
  constructor(
    @Inject(UserRepositoryHandle)
    private readonly userRepository: UserRepository,
  ) {}

  getUser(dto: GetUserDto): Promise<User> {
    return this.userRepository.findById(dto.id);
  }

  getUsers(): Promise<Array<User>> {
    return this.userRepository.findAll();
  }
}
