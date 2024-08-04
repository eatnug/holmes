import { Controller, Get, Inject, Query } from '@nestjs/common';
import {
  HouseQueryService,
  HouseQueryServiceHandle,
} from '../../../application/ports/in/house.query.service';
import { HouseSearchRequest } from './request/house.search.request';

@Controller('houses')
export class HouseController {
  constructor(
    @Inject(HouseQueryServiceHandle)
    private readonly houseQueryService: HouseQueryService,
  ) {}

  @Get()
  search(@Query() request: HouseSearchRequest) {
    return this.houseQueryService.searchByCoordinate(request.toDto());
  }
}
