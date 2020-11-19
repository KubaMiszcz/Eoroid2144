import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITile } from '../models/ITile';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() tile: ITile;
  @Output() tileIsToggled = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleTile() {
    this.tileIsToggled.emit();
  }
}
