import { HouseApi } from '../../../application/ports/out/house.api';
import { HouseSearchDto } from '../../../application/services/dto/search.house.by.coordinate.dto';
import { House } from '../../../application/domain/house';
import { HouseZigbangApi } from './house.zigbang.api';
import { ZigbangSearchRequest } from './request/zigbang.search.request';

export class HouseApiImpl implements HouseApi {
  private readonly houseZigbangApi: HouseZigbangApi;
  // private readonly dabangApi: House;

  constructor() {
    this.houseZigbangApi = new HouseZigbangApi();
  }

  async searchByCoordinate(dto: HouseSearchDto): Promise<Array<House>> {
    const zigbangResult = await this.houseZigbangApi.searchHouse(
      ZigbangSearchRequest.from(dto),
    );

    // const dabanResult = await this.houseZigbangApi.searchHouse(
    //   ZigbangSearchRequest.from(dto),
    // );
    return zigbangResult;
  }
}
