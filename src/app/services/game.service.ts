import { BoardService } from './board.service';
import { IGameSettings } from './../models/IGameSettings';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { IBoard } from '../models/IBoard';
import { ITile } from '../models/ITile';
import { IGameState } from '../models/IGameState';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  gameSettings: IGameSettings;
  gameState: IGameState;
  gameSettingsUpdated = new EventEmitter();
  gameRestarted = new EventEmitter();

  constructor(
    private boardService: BoardService,
  ) {
    this.gameSettings = {
      boardSizeX: 6,
      boardSizeY: 4,
      difficultyLevel: 2,

      maxBoardSizeX: 15,
      minBoardSizeX: 3,
      maxBoardSizeY: 10,
      minBoardSizeY: 3,
      maxdifficultyLevel: 10,
    } as IGameSettings;

    this.gameState = {
      movesCounter: 0,
    } as IGameState;

    boardService.tileIsClicked.subscribe(() => this.gameState.movesCounter++);
  }


  restartGame() {
    this.boardService.prepareCleanBoard(this.gameSettings.boardSizeX, this.gameSettings.boardSizeY);
    this.boardService.fillBoard(this.gameSettings.difficultyLevel);
    this.gameState.movesCounter = 0;
    this.gameRestarted.emit();
  }










  checkIfYouWin() {
    return !this.boardService.board.tilesMatrix.some(row => row.some(t => t.isChecked));
  }
}
