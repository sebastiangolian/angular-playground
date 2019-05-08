import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Game } from '../interfaces/game.interface';
import { catchError } from 'rxjs/operators';
import { MessageService } from 'src/app/shared/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class GameApiService {

  url: string = "http://localhost:3000";

  constructor(private http: HttpClient, private messageService: MessageService) {}

  get() : Observable<Game[]> {
    return this.http
      .get<Game[]>(this.url + '/api/games')
      .pipe(
        catchError(this.handleError<Game[]>('get'))
      ); 
  }

  create(game: Game): Observable<any> {
    return this.http
      .post(this.url + '/api/games', game)
      .pipe(
        catchError(this.handleError<Game>('create'))
      ); 
  }

  update(game: Game): Observable<any> {
    return this.http
      .patch(this.url + '/api/games', game)
      .pipe(
        catchError(this.handleError<Game>('update'))
      ); 
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: Error): Observable<T> => {
      this.messageService.message = error.message;
      return of(result as T);
    };
  }
}
