import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CommentCollection } from '../interfaces/comment-collection';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HydraHttpError } from 'src/app/hydra-api/interfaces/hydra-http-error';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  apiUrl: string = environment.apiUrl + "/public/api/comments/";

  constructor(private http: HttpClient) { }

  public getAll(url: string): Observable<CommentCollection> {
    return this.http.get<CommentCollection>(environment.apiUrl + url)
      .pipe(catchError(this.handleError<CommentCollection>('getAll'))); 
  }

  public add(post: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.apiUrl, post)
      .pipe(catchError(this.handleError<Comment>('add')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HydraHttpError): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
