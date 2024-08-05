import { Coordinate } from '../../domain/coordinate';

export class HouseSearchDto {
  constructor(
    public readonly southWest: Coordinate,
    public readonly northEast: Coordinate,
  ) {}
}
