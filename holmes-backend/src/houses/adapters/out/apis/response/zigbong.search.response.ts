import { House } from '../../../../application/domain/house';

export enum ZigBangSearchResponseItemBmType {
  ZIGBANG = 'ZIGBANG',
  PARTNER = 'PARTNER',
}

export class ZigBangSearchResponseItem {
  lat: number;
  lng: number;
  itemId: number;
  itemBmType: ZigBangSearchResponseItemBmType;

  static toHouse(item: ZigBangSearchResponseItem) {
    return new House(
      `zigbang-${item.itemId}`,
      { latitude: item.lat, longitude: item.lng },
      {},
    );
  }
}

export interface ZigBangSearchResponse {
  items: Array<ZigBangSearchResponseItem>;
}
