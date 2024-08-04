import { House } from '../../domain/house';
import { SearchHouseByCoordinateDto } from '../../services/dto/search.house.by.coordinate.dto';

export interface HouseQueryService {
  searchByCoordinate(dto: SearchHouseByCoordinateDto): Promise<Array<House>>;
}

export const HouseQueryServiceHandle = 'HouseQueryService';
