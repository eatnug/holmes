import { Coordinate } from '../../domain/coordinate';

export class SearchHouseByCoordinateDto {
  constructor(
    public readonly southWest: Coordinate,
    public readonly northEast: Coordinate,
  ) {}
}
