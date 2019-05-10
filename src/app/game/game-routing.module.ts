import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { GameSimpleComponent } from './components/game-simple/game-simple.component';
import { GameObservableComponent } from './components/game-observable/game-observable.component';
import { GameApiComponent } from './components/game-api/game-api.component';
import { GameApiDeactivateGuard } from './guards/game-api-deactivate.guard';

const routes: Routes = [
  { path: '', component: GameComponent },
  { path: 'game-simple', component: GameSimpleComponent },
  { path: 'game-observable', component: GameObservableComponent },
  { path: 'game-api', component: GameApiComponent, canDeactivate: [GameApiDeactivateGuard]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    GameApiDeactivateGuard
  ]
})
export class GameRoutingModule { }
