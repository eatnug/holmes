import { House } from '../../domain/house';
import { HouseSearchDto } from '../../services/dto/search.house.by.coordinate.dto';

export interface HouseQueryService {
  searchByCoordinate(dto: HouseSearchDto): Promise<Array<House>>;
}

export const HouseQueryServiceHandle = 'HouseQueryService';
