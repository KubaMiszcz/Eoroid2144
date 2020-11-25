import { GreetingsComponent } from './greetings/greetings.component';
import { CreditsComponent } from './credits/credits.component';
import { GameComponent } from './game/game.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'game', component: GameComponent },
  { path: 'credits', component: CreditsComponent },
  { path: 'help', component: GreetingsComponent },
  { path: 'greetings', component: GreetingsComponent },
  { path: 'home', component: GreetingsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
