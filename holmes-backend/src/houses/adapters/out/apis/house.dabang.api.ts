import { HouseApi } from '../../../application/ports/out/house.api';
import { HouseSearchDto } from '../../../application/services/dto/search.house.by.coordinate.dto';
import { House } from '../../../application/domain/house';
import { ZigbangSearchRequest } from './request/zigbang.search.request';
import axios from 'axios';
import {
  ZigBangSearchResponse,
  ZigBangSearchResponseItem,
} from './response/zigbong.search.response';

export class HouseDabangApi {
  private readonly apiUrl = 'https://apis.zigbang.com/v2/items/oneroom';
  async searchByCoordinate(dto: HouseSearchDto): Promise<Array<House>> {
    const result = await axios.get<ZigBangSearchResponse>(this.apiUrl, {
      params: ZigbangSearchRequest.from(dto),
    });

    return result.data.items.map(ZigBangSearchResponseItem.toHouse);
  }
}
