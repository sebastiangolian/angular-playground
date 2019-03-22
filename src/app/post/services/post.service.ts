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

  apiPostUrl: string = environment.apiUrl + "/public/api/posts/";

  constructor(private http: HttpClient) { }

  public getPosts(url: string): Observable<PostCollection> {
    return this.http.get<PostCollection>(environment.apiUrl + url)
      .pipe(catchError(this.handleError<PostCollection>('getPost'))); 
  }

  public getPost(id: string): Observable<Post> {
    return this.http.get<Post>(this.apiPostUrl + id)
      .pipe(catchError(this.handleError<Post>('getPost')));
  }

  public addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiPostUrl, post)
      .pipe(catchError(this.handleError<Post>('addPost')));
  }

  public updatePost(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(this.apiPostUrl + id, post)
      .pipe(catchError(this.handleError<Post>('updatePost')));
  }

  public deletePost(post: Post): Observable<Post> {
    return this.http.delete<Post>(this.apiPostUrl + post.id)
      .pipe(catchError(this.handleError<Post>('deletePost')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HydraHttpError): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
