import { EventEmitter, Injectable } from '@angular/core';
import { IBoard } from '../models/IBoard';
import { ITile } from '../models/ITile';
import { CommonUtils } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  board: IBoard;
  initialImageOfBoard: IBoard;
  tileIsClicked = new EventEmitter();

  constructor() { }

  prepareCleanBoard(sizeX: number, sizeY: number) {
    this.board = { sizeX, sizeY } as IBoard;
    this.board.debug = 'clean';

    this.board.tilesMatrix = [];
    for (let Y = 0; Y < this.board?.sizeY; Y++) {
      const row = [];
      for (let X = 0; X < this.board?.sizeX; X++) {
        const tile = {} as ITile;
        tile.coordX = X;
        tile.coordY = Y;
        tile.isChecked = false;
        row.push(tile);
      }
      this.board?.tilesMatrix?.push(row);
    }
  }



  fillBoard(difficultyLevel: number = 2) {
    const seed = difficultyLevel;
    for (let index = 0; index < seed; index++) {
      const coordX = Math.floor(Math.random() * this.board.sizeX);
      const coordY = Math.floor(Math.random() * this.board.sizeY);

      const tile = this.board.tilesMatrix[coordY][coordX];
      this.toggleTileWithNeighbours(tile);
    }

    this.board.debug = 'initial';
  }



  restoreStartedBoard() {
    this.board = CommonUtils.deepCopy(this.initialImageOfBoard);
  }

  saveInitialBoard() {
    this.initialImageOfBoard = CommonUtils.deepCopy(this.board);
  }




  toggleTileWithNeighbours(tile: ITile) {
    for (let i = tile.coordY - 1; i <= tile.coordY + 1; i++) {
      if ((i > this.board.sizeY - 1) || (i < 0)) {
        continue;
      }

      const row = this.board.tilesMatrix[i];
      for (let j = tile.coordX - 1; j <= tile.coordX + 1; j++) {
        if ((j > this.board.sizeX - 1) || (j < 0)) {
          continue;
        }

        const switchedTile = row[j];
        switchedTile.isChecked = !switchedTile.isChecked;
      }
    }

    this.board.debug = 'clicked';
    this.tileIsClicked.emit();

  }
}
