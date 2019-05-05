import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { GameSimpleComponent } from './components/game-simple/game-simple.component';
import { GameObservableComponent } from './components/game-observable/game-observable.component';
import { GameApiComponent } from './components/game-api/game-api.component';

const routes: Routes = [
  {
    path: '',
    component: GameComponent
  },
  {
    path: 'game-simple',
    component: GameSimpleComponent
  },
  {
    path: 'game-observable',
    component: GameObservableComponent
  },
  {
    path: 'game-api',
    component: GameApiComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
