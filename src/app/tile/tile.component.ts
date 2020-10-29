import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITile } from '../models/ITile';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() tile: ITile;
  @Output() tileIsClicked = new EventEmitter<ITile>();

  constructor() { }

  ngOnInit(): void {
  }

  tileClicked(tile: ITile) {
    this.tileIsClicked.emit(tile);
  }

}
