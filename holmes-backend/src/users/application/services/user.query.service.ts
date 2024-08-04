import { User } from '../domain/user.model';
import { GetUserDto } from './dto/GetUserDto';

export interface UserQueryService {
  getUser(dto: GetUserDto): Promise<User>;
  getUsers(): Promise<Array<User>>;
}

export const USER_QUERY_SERVICE = 'USER_QUERY_SERVICE';
