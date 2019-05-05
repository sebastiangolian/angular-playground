import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Game } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameApiService {

  url: string = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  get() : Observable<Game[]> {
    return this.http.get<Game[]>(this.url + '/api/games');
  }

  create(game: Game): Observable<any> {
    return this.http.post(this.url + '/api/games', game);
  }
}
