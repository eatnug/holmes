import { HouseSearchDto } from '../../../../application/services/dto/search.house.by.coordinate.dto';
import { encode } from 'ngeohash';
import { Coordinate } from '../../../../application/domain/coordinate';

export class DabangSearchRequest {
  geohash: string;
  depositMin: number;
  rentMin: number;
  salesTypes: Array<SalesType>;
  domain: 'zigbang';
  checkAnyItemWithoutFilter: true;

  static from(dto: HouseSearchDto): DabangSearchRequest {
    const centerpoint: Coordinate = {
      longitude:
        dto.southWest.longitude +
        (dto.northEast.longitude - dto.southWest.longitude),
      latitude:
        dto.southWest.latitude +
        (dto.northEast.latitude - dto.southWest.latitude),
    };
    const _geohash = encode(centerpoint.latitude, centerpoint.longitude, 5);

    return {
      geohash: _geohash,
      depositMin: 0,
      rentMin: 0,
      salesTypes: [SalesType.JeonSe, SalesType.WeolSe],
      domain: 'zigbang',
      checkAnyItemWithoutFilter: true,
    };
  }
}

export enum SalesType {
  JeonSe = '전세',
  WeolSe = '월세',
}
