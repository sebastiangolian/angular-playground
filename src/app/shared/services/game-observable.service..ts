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
      new GameModel(1, 'FIFA', 100),
      new GameModel(2, 'PES', 150),
      new GameModel(3, 'WOT', 0)
    ];
  }

  getGames(): Observable<GameModel[]> {
    return of(this.games);
  }

  createStock(game: GameModel): Observable<any> {
    let foundGame = this.games.find(each => each.id === game.id);
    if (foundGame) {
      return of({msg: 'Game with id ' + game.id + ' already exists'});
    }
    this.games.push(game);
    return of({msg: 'Game with id ' + game.id + ' successfully created'});;
  }
}
