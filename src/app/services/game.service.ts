import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { eGameInfo } from '../models/eGameInfo';
import { IGameState } from '../models/IGameState';
import { IGameSettings } from './../models/IGameSettings';
import { BoardService } from './board.service';


@Injectable({
  providedIn: 'root'
})
export class GameService {
  gameSettings: IGameSettings;
  gameState: IGameState;

  gameInfoEmitter = new BehaviorSubject<eGameInfo>(eGameInfo.newGame);

  constructor(
    private boardService: BoardService,
  ) {
    this.gameSettings = {
      boardSizeX: 6,
      boardSizeY: 4,
      difficultyLevel: 5,

      maxBoardSizeX: 11,
      minBoardSizeX: 3,
      maxBoardSizeY: 10,
      minBoardSizeY: 3,
      maxdifficultyLevel: 40,
    } as IGameSettings;

    this.gameState = {
      movesCounter: 0,
      tilesLeft: 0,
    } as IGameState;

    boardService.tileIsClicked.subscribe(() => {
      this.gameState.movesCounter++;
      this.countTilesLeft();
    });
  }

  newGame(info: eGameInfo) {
    switch (info) {

      case eGameInfo.newGame:
        this.boardService.prepareCleanBoard(this.gameSettings.boardSizeX, this.gameSettings.boardSizeY);
        this.boardService.fillBoard(this.gameSettings.difficultyLevel);
        this.boardService.saveInitialBoard();
        this.countTilesLeft();
        break;

      case eGameInfo.restartGame:
        this.boardService.restoreStartedBoard();
        this.countTilesLeft();
        break;

      default:
        break;

    }

    this.gameState.movesCounter = 0;
    this.gameInfoEmitter.next(info);
  }

  areYouWin(): boolean {
    return this.gameState.tilesLeft <= 0;
  }

  countTilesLeft() {
    let tilesLeft = 0;
    this.boardService?.board?.tilesMatrix?.forEach(row => tilesLeft += row.filter(tile => tile.isChecked)?.length);
    this.gameState.tilesLeft = tilesLeft;
  }

}
