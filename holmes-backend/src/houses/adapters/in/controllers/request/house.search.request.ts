import { IsNumber, IsObject, ValidateNested } from 'class-validator';
import { plainToInstance, Transform, Type } from 'class-transformer';
import { HouseSearchDto } from '../../../../application/services/dto/search.house.by.coordinate.dto';

class Coordinate {
  @IsNumber()
  longitude: number;

  @IsNumber()
  latitude: number;
}

export class HouseSearchRequest {
  @IsObject()
  @ValidateNested()
  @Transform(({ value }) => plainToInstance(Coordinate, JSON.parse(value)))
  @Type(() => Coordinate)
  southWest: Coordinate;

  @IsObject()
  @ValidateNested()
  @Transform(({ value }) => plainToInstance(Coordinate, JSON.parse(value)))
  @Type(() => Coordinate)
  northEast: Coordinate;

  toDto() {
    return new HouseSearchDto(this.southWest, this.northEast);
  }
}
