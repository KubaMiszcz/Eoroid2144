import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SettingsModalComponent } from '../game-settings-modal/game-settings-modal.component';
import { eGameInfo } from '../models/eGameInfo';
import { IBoard } from '../models/IBoard';
import { IGameSettings as IGameSettings } from '../models/IGameSettings';
import { IGameState } from '../models/IGameState';
import { GameService } from '../services/game.service';
import { BoardService } from './../services/board.service';

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
  tilesLeft: number;

  constructor(
    private boardService: BoardService,
    private gameService: GameService,
    private modal: NgbModal,
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

  showSettings() {
    this.modal.open(SettingsModalComponent);
  }
}
