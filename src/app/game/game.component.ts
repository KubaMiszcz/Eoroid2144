import { IGameSettings as IGameSettings } from '../models/IGameSettings';
import { BoardService } from './../services/board.service';
import { Component, OnInit, } from '@angular/core';
import { IBoard } from '../models/IBoard';
import { GameService } from '../services/game.service';
import { ITile } from '../models/ITile';
import { IGameState } from '../models/IGameState';
import { eGameInfo } from '../models/eGameInfo';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  gameSettings: IGameSettings;
  gameState: IGameState;
  board: IBoard;
  areYouWin = false;

  constructor(
    private boardService: BoardService,
    private gameService: GameService,
  ) { }

  ngOnInit(): void {
    this.gameSettings = this.gameService?.gameSettings;
    this.gameState = this.gameService?.gameState;

    this.gameService.gameInfoEmitter.subscribe(info => {
      this.areYouWin = info === eGameInfo.youWin ? true : false;
    });
  }

  newGame() {
    this.gameService.newGame(eGameInfo.newGame);
  }

}
