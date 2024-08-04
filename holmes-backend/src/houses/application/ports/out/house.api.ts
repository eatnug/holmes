import { SearchHouseByCoordinateDto } from '../../services/dto/search.house.by.coordinate.dto';
import { House } from '../../domain/house';

export interface HouseApi {
  searchByCoordinate(dto: SearchHouseByCoordinateDto): Promise<Array<House>>;
}

export const HouseApiHandle = 'HouseApi';
