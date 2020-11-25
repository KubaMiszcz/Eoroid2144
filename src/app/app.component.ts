import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SettingsModalComponent } from './settings-modal/settings-modal.component';
import { eGameInfo } from './models/eGameInfo';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Eoroid2144';

  constructor(
    private gameService: GameService,
    private modal: NgbModal,
  ) {
    this.newGame();
  }

  newGame() {
    this.gameService.newGame(eGameInfo.newGame);
  }

  restartGame() {
    this.gameService.newGame(eGameInfo.restartGame);
  }

  showSettingsModal() {
    this.modal.open(SettingsModalComponent);
  }
}
