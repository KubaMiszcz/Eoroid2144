import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { eGameInfo } from '../models/eGameInfo';
import { IGameSettings } from '../models/IGameSettings';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-settings-modal',
  templateUrl: './game-settings-modal.component.html',
  styleUrls: ['./game-settings-modal.component.scss']
})
export class SettingsModalComponent implements OnInit {
  gameSettings: IGameSettings;

  boardSizeXRange: number[];
  boardSizeX: number;

  boardSizeYRange: number[];
  boardSizeY: number;

  difficultyLevelRange: number[];
  difficultyLevel: number;

  constructor(
    private gameService: GameService,
    public activeModal: NgbActiveModal
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

    this.activeModal.close('Close click');
  }

}
