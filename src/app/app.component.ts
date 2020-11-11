import { Component } from '@angular/core';
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
    this.restartGame();

    this.gameService.gameSettingsUpdated.subscribe(data => {
      this.restartGame();
    });
  }

  restartGame() {
    this.gameService.restartGame();
  }
}
