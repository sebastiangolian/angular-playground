import { Injectable } from '@angular/core';
import { GameModel } from '../models/game';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameObservableService {

  private games: GameModel[];

  constructor() {
    this.games = [
      {id: 1, title: 'FIFA', price: 100},
      {id: 2, title: 'PES', price: 150},
      {id: 3, title: 'WOT', price: 0}
    ];
  }

  getGames(): Observable<GameModel[]> {
    return of(this.games);
  }

  createGame(game: GameModel): Observable<any> {
    let gameClone = Object.assign({}, game);
    gameClone.id = this.games.length + 1;
    this.games.push(gameClone);
    return of(gameClone);
  }
}
