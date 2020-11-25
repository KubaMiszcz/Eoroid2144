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

  elapsedSeconds = 0;

  constructor(
    private boardService: BoardService,
  ) {
    this.gameSettings = {
      boardSizeX: 9,
      boardSizeY: 4,
      difficultyLevel: 5,

      maxBoardSizeX: 20,
      minBoardSizeX: 3,
      maxBoardSizeY: 20,
      minBoardSizeY: 3,

      maxBoardSizeXForMobile: 9,
      maxBoardSizeYForMobile: 20,

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

    this.elapsedSeconds = 0;
    this.gameState.elapsedTimeFormatted = '00:00';
    setInterval(() => {
      this.gameState.elapsedTimeFormatted = this.getElapsedSeconds(this.elapsedSeconds);
      this.elapsedSeconds++;
    }, 1000); // set it every one seconds}

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


  getElapsedSeconds(elapsedSeconds: number): string {
    const seconds = elapsedSeconds % 60;
    const minutes = (elapsedSeconds - seconds) / 60;

    const paddedSeconds = seconds.toString().padStart(2, '0');
    const paddedMinutes = minutes.toString().padStart(2, '0');

    return `${paddedMinutes.toString().padStart(2, '0')}:${paddedSeconds.toString().padStart(2, '0')}`;
  }
}
