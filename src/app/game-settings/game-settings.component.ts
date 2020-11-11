import { IGameSettings as IGameSettings } from '../models/IGameSettings';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { GameService } from '../services/game.service';
import { eGameInfo } from '../models/eGameInfo';

@Component({
  selector: 'app-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.scss']
})
export class GameSettingsComponent implements OnInit {
  gameSettings: IGameSettings;

  boardSizeXRange: number[];
  boardSizeX: number;

  boardSizeYRange: number[];
  boardSizeY: number;

  difficultyLevelRange: number[];
  difficultyLevel: number;

  constructor(
    private gameService: GameService,
  ) { }

  ngOnInit(): void {
    this.gameSettings = this.gameService.gameSettings;

    const gs = this.gameSettings;
    this.boardSizeXRange = Array.from(Array(gs.maxBoardSizeX + 1).keys()).slice(gs.minBoardSizeX);
    this.boardSizeYRange = Array.from(Array(gs.maxBoardSizeY + 1).keys()).slice(gs.minBoardSizeY);
    this.difficultyLevelRange = Array.from(Array(gs.maxdifficultyLevel + 1).keys()).slice(1);

    this.boardSizeX = this.boardSizeXRange.find(v => v === gs.boardSizeX);
    this.boardSizeY = this.boardSizeYRange.find(v => v === gs.boardSizeY);
    this.difficultyLevel = this.difficultyLevelRange.find(v => v === gs.difficultyLevel);

  }

  onConfirm() {
    this.gameSettings.boardSizeX = Number(this.boardSizeX);
    this.gameSettings.boardSizeY = Number(this.boardSizeY);
    this.gameSettings.difficultyLevel = Number(this.difficultyLevel);

    this.gameService.newGame(eGameInfo.newGame);
  }


}
