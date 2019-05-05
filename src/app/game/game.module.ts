import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './components/game/game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameSimpleComponent } from './components/game-simple/game-simple.component';
import { GameObservableComponent } from './components/game-observable/game-observable.component';

@NgModule({
  declarations: [
    GameComponent,
    GameSimpleComponent,
    GameObservableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GameRoutingModule
  ],
  exports: [
    GameComponent,
    GameSimpleComponent,
    GameObservableComponent
  ]
})
export class GameModule { }
