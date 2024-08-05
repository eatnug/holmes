import { House } from '../../../application/domain/house';
import { ZigbangSearchRequest } from './request/zigbang.search.request';
import axios from 'axios';
import {
  ZigBangSearchResponse,
  ZigBangSearchResponseItem,
} from './response/zigbong.search.response';

export class HouseZigbangApi {
  private readonly apiUrl = 'https://apis.zigbang.com/v2/items/oneroom';
  async searchHouse(request: ZigbangSearchRequest): Promise<Array<House>> {
    const result = await axios.get<ZigBangSearchResponse>(this.apiUrl, {
      params: request,
    });

    return result.data.items.map(ZigBangSearchResponseItem.toHouse);
  }
}
