import { IGameSettings as IGameSettings } from '../models/IGameSettings';
import { BoardService } from './../services/board.service';
import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IBoard } from '../models/IBoard';
import { GameService } from '../services/game.service';
import { ITile } from '../models/ITile';
import { IGameState } from '../models/IGameState';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnChanges {
  gameSettings: IGameSettings;
  gameState: IGameState;
  board: IBoard;

  constructor(
    private boardService: BoardService,
    private gameService: GameService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }

  ngOnInit(): void {
    this.gameSettings = this.gameService?.gameSettings;
    this.gameState = this.gameService?.gameState;
  }

}
