import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
import { Game } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class GameApiService {

  url: string = "http://localhost:3000/api/games/";

  constructor(private http: HttpClient) { }

  get(query: string): Observable<Game[]> {
    return this.http.get<Game[]>(this.url + (query != "" ? "?q=" + query : ""));
  }

  getOne(id: number): Observable<Game> {
    return this.http.get<any>(this.url + id);
  }

  create(game: Game): Observable<any> {
    return this.http.post(this.url, game);
  }

  update(game: Game): Observable<any> {
    return this.http.patch(this.url + game.id, game);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
