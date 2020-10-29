import { ITile } from './ITile';
export interface IBoard {
  sizeX: number;
  sizeY: number;
  tiles: ITile[][];
}
