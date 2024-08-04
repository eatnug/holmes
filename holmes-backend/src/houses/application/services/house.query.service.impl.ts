import { HouseQueryService } from '../ports/in/house.query.service';
import { House } from '../domain/house';
import { Inject } from '@nestjs/common';
import {
  HouseRepository,
  HouseRepositoryHandle,
} from '../ports/out/house.repository';
import { SearchHouseByCoordinateDto } from './dto/search.house.by.coordinate.dto';
import { HouseApi, HouseApiHandle } from '../ports/out/house.api';

export class HouseQueryServiceImpl implements HouseQueryService {
  constructor(
    @Inject(HouseRepositoryHandle)
    private readonly houseRepository: HouseRepository,
    @Inject(HouseApiHandle)
    private readonly houseApi: HouseApi,
  ) {}

  searchByCoordinate(dto: SearchHouseByCoordinateDto): Promise<Array<House>> {
    return this.houseApi.searchByCoordinate(dto);
  }
}
