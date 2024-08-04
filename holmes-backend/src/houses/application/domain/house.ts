import { Address } from './address';
import { Coordinate } from './coordinate';

export class House {
  constructor(
    public readonly id: string,
    public readonly coordinate: Coordinate,
    public readonly address: Address,
  ) {}
}
