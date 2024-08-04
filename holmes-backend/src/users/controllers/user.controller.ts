import {
  USER_QUERY_SERVICE,
  UserQueryService,
} from '../application/services/user.query.service';
import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  USER_COMMAND_SERVICE,
  UserCommandService,
} from '../application/services/user.command.service';
import { UpdateUserRequest } from './request/UpdateUserRequest';
import { CreateUserRequest } from './request/CreateUserRequest';

@Controller('users')
export class UserController {
  constructor(
    @Inject(USER_QUERY_SERVICE)
    private readonly userQueryService: UserQueryService,
    @Inject(USER_COMMAND_SERVICE)
    private readonly userCommandService: UserCommandService,
  ) {}

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userQueryService.getUser({ id });
  }

  @Get()
  getUsers() {
    return this.userQueryService.getUsers();
  }

  @Post()
  createUser(@Body() createUserRequest: CreateUserRequest) {
    return this.userCommandService.createUser(createUserRequest);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() request: UpdateUserRequest) {
    return this.userCommandService.updateUser({ id: id, ...request });
  }
}