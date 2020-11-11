import { eGameInfo } from './../models/eGameInfo';
import { GameService } from './../services/game.service';
import { BoardService } from './../services/board.service';
import { ITile } from './../models/ITile';
import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { IBoard } from '../models/IBoard';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  board: IBoard;
  rows: ITile[];

  constructor(
    private boardService: BoardService,
    private gameService: GameService,
  ) { }

  ngOnInit(): void {
    this.gameService.gameInfoEmitter.subscribe(info => {
      this.board = this.boardService.board;
    });
  }



  onTileToggled(tile: ITile) {
    this.boardService.toggleTileWithNeighbours(tile);
  }

}
