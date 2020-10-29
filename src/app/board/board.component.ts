import { BoardService } from './../services/board.service';
import { ITile } from './../models/ITile';
import { Component, OnInit } from '@angular/core';
import { IBoard } from '../models/IBoard';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  board: IBoard;
  rows: ITile[];
  movesHistory = [];
  clickedTilesHistory: ITile[] = [];
  movesCounter = 0;
  youWin = 'gameinprogress';

  constructor(
    private boardService: BoardService
  ) { }

  ngOnInit(): void {
    this.board = {} as IBoard;
    this.board.sizeX = 6;
    this.board.sizeY = 4;
    this.boardService.board = this.board;

    this.restartGame();
  }

  private prepareCleanBoard(board: IBoard) {
    board.tiles = [];
    for (let Y = 0; Y < board?.sizeY; Y++) {
      const row = [];
      for (let X = 0; X < board?.sizeX; X++) {
        const tile = {} as ITile;
        tile.X = X;
        tile.Y = Y;
        row.push(tile);
      }
      board?.tiles?.push(row);
    }
  }


  private fillBoard(board: IBoard, seed: number = 1) {
    for (let index = 0; index < seed; index++) {
      const tile = {} as ITile;
      tile.X = Math.floor(Math.random() * this.board.sizeX);
      tile.Y = Math.floor(Math.random() * this.board.sizeY);
      this.onTileClicked(tile);
    }
  }

  onTileClicked(tile: ITile) {
    this.clickedTilesHistory.push(tile);
    this.movesHistory.push(this.board.tiles);

    for (let i = tile.Y - 1; i <= tile.Y + 1; i++) {
      if ((i > this.board.sizeY - 1) || (i < 0)) {
        continue;
      }
      const row = this.board.tiles[i];

      for (let j = tile.X - 1; j <= tile.X + 1; j++) {
        if ((j > this.board.sizeX - 1) || (j < 0)) {
          continue;
        }

        const switchedTile = row[j];
        this.switchTile(switchedTile);
      }
    }

    this.movesCounter++;
    this.youWin = this.areYouWin(this.board) ? 'youwin' : 'inprogress';
  }

  areYouWin(board: IBoard) {
    return !board.tiles.some(row => row.some(t => t.isChecked));
  }

  private switchTile(tile: ITile) {
    tile.isChecked = !tile.isChecked;
  }

  restartGame() {
    this.clickedTilesHistory = [];
    this.prepareCleanBoard(this.board);
    this.fillBoard(this.board, 5);

    this.movesCounter = 0;
    this.youWin = 'gameinprogress';
    this.movesHistory = [];
  }

  undoMove() {
    // let lastMove = this.board.tiles.pop();
  }

}
