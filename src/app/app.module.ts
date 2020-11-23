import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { TileComponent } from './tile/tile.component';
import { GameComponent } from './game/game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SettingsModalComponent } from './game-settings-modal/game-settings-modal.component';
import { CreditsComponent } from './credits/credits.component';
import { GreetingsComponent } from './greetings/greetings.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TileComponent,
    GameComponent,
    FooterComponent,
    SettingsModalComponent,
    CreditsComponent,
    GreetingsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
