import { GameComponent } from './game/game.component';
import { GameSettingsComponent } from './game-settings/game-settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'game', component: GameComponent },
  { path: 'home', component: GameComponent },
  { path: 'settings', component: GameSettingsComponent },
  { path: '', component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
