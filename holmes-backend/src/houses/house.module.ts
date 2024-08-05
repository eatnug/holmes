// user.module.ts

import { Module } from '@nestjs/common';
import { HouseController } from './adapters/in/controllers/house.controller';
import { HouseQueryServiceHandle } from './application/ports/in/house.query.service';
import { HouseQueryServiceImpl } from './application/services/house.query.service.impl';
import { HouseRepositoryHandle } from './application/ports/out/house.repository';
import { HouseRepositoryImpl } from './adapters/out/repositories/house.repository.impl';
import { HouseApiHandle } from './application/ports/out/house.api';
import { HouseApiImpl } from './adapters/out/apis/house.api.impl';

@Module({
  controllers: [HouseController],
  providers: [
    { provide: HouseQueryServiceHandle, useClass: HouseQueryServiceImpl },
    { provide: HouseRepositoryHandle, useClass: HouseRepositoryImpl },
    { provide: HouseApiHandle, useClass: HouseApiImpl },
  ],
})
export class HouseModule {}
