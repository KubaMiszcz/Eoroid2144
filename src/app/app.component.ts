import { ChangeDetectorRef, Component } from '@angular/core';
import { eGameInfo } from './models/eGameInfo';
import { IGameSettings } from './models/IGameSettings';
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
  ) {
    this.newGame();
  }

  newGame() {
    this.gameService.newGame(eGameInfo.newGame);
  }

  restartGame() {
    this.gameService.newGame(eGameInfo.restartGame);
  }
}
