import { Component, OnInit } from '@angular/core';
import { eGameInfo } from '../models/eGameInfo';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss']
})
export class GreetingsComponent implements OnInit {

  constructor(
    private gameService: GameService,
  ) { }

  ngOnInit(): void {
  }

  newGame() {
    this.gameService.newGame(eGameInfo.newGame);
  }

}
