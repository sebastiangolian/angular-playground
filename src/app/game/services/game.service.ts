import { Injectable } from '@angular/core';
import { GameModel } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games: GameModel[];

  constructor() {
    this.games = [
      new GameModel(1, 'FIFA', 100),
      new GameModel(2, 'PES', 150),
      new GameModel(3, 'WOT', 0)
    ];
  }

  getGames(): GameModel[] {
    return this.games;
  }

  createGame(game: GameModel) {
    let foundGame = this.games.find(each => each.id === game.id);
    if (foundGame) {
      return false;
    }
    this.games.push(game);
    return true;
  }
}
