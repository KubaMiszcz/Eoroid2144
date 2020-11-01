import { Injectable } from '@angular/core';
import { IBoard } from '../models/IBoard';
import { ITile } from '../models/ITile';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  board: IBoard;

  constructor() { }

  // public getRow(i: number): ITile[] {
  //   i = (i > this.board.sizeY) ? this.board.sizeY : i;
  //   i = (i < 0) ? 0 : i;
  //   return this.board.tiles[i];
  // }

  // public getTileFromRow(row: ITile[], j: number): ITile {
  //   j = (j > this.board.sizeX) ? this.board.sizeX : j;
  //   j = (j < 0) ? 0 : j;
  //   return row[j];
  // }
}
