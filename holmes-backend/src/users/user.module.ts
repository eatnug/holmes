// user.module.ts

import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserQueryServiceImpl } from './application/services/user.query.service.impl';
import { USER_QUERY_SERVICE } from './application/services/user.query.service';
import { USER_REPOSITORY_PORT } from './application/repositories/user.repository';
import { UserRepositoryImpl } from './repositories/user.repository.impl';
import { USER_COMMAND_SERVICE } from './application/services/user.command.service';
import { UserCommandServiceImpl } from './application/services/user.command.service.impl';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: USER_COMMAND_SERVICE,
      useClass: UserCommandServiceImpl,
    },
    {
      provide: USER_QUERY_SERVICE,
      useClass: UserQueryServiceImpl,
    },
    {
      provide: USER_REPOSITORY_PORT,
      useClass: UserRepositoryImpl,
    },
  ],
})
export class UserModule {}
