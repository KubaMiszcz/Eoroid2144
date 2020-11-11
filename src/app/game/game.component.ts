import { IGameSettings as IGameSettings } from '../models/IGameSettings';
import { BoardService } from './../services/board.service';
import { Component, OnInit } from '@angular/core';
import { IBoard } from '../models/IBoard';
import { GameService } from '../services/game.service';
import { ITile } from '../models/ITile';
import { IGameState } from '../models/IGameState';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  gameSettings: IGameSettings;
  gameState: IGameState;
  board: IBoard;

  // movesHistory = [];
  // clickedTilesHistory: ITile[] = [];
  // youWin = 'gameinprogress';


  constructor(
    private boardService: BoardService,
    private gameService: GameService,
  ) { }

  ngOnInit(): void {
    this.gameSettings = this.gameService?.gameSettings;
    this.gameState = this.gameService?.gameState;
  }

  onTileClicked() {
    // this.gameState.movesCounter++;
  }

  undoMove() { }

}
