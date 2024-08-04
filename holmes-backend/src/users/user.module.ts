// user.module.ts

import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserQueryServiceImpl } from './application/services/user.query.service.impl';
import { UserQueryServiceHandle } from './application/services/user.query.service';
import { UserRepositoryHandle } from './application/repositories/user.repository';
import { UserRepositoryImpl } from './persistence/user.repository.impl';
import { UserCommandServiceHandle } from './application/services/user.command.service';
import { UserCommandServiceImpl } from './application/services/user.command.service.impl';

@Module({
  controllers: [UserController],
  providers: [
    { provide: UserCommandServiceHandle, useClass: UserCommandServiceImpl },
    { provide: UserQueryServiceHandle, useClass: UserQueryServiceImpl },
    { provide: UserRepositoryHandle, useClass: UserRepositoryImpl },
  ],
})
export class UserModule {}
