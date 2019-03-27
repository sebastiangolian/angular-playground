import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post';
import { Observable, of } from 'rxjs';
import { PostCollection } from '../interfaces/post-collection';
import { catchError } from 'rxjs/operators';
import { HydraHttpError } from 'src/app/hydra-api/interfaces/hydra-http-error';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  apiUrl: string = environment.apiUrl + "/public/api/posts/";

  constructor(private http: HttpClient) { }

  public getAll(url: string): Observable<PostCollection> {
    return this.http.get<PostCollection>(environment.apiUrl + url)
      .pipe(catchError(this.handleError<PostCollection>('getAll'))); 
  }

  public get(id: string): Observable<Post> {
    return this.http.get<Post>(this.apiUrl + id)
      .pipe(catchError(this.handleError<Post>('get')));
  }

  public add(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post)
      .pipe(catchError(this.handleError<Post>('add')));
  }

  public update(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(this.apiUrl + id, post)
      .pipe(catchError(this.handleError<Post>('update')));
  }

  public delete(post: Post): Observable<Post> {
    return this.http.delete<Post>(this.apiUrl + post.id)
      .pipe(catchError(this.handleError<Post>('delete')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HydraHttpError): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
