import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post';
import { Observable, of } from 'rxjs';
import { PostCollection } from '../interfaces/post-collection';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  apiUrl: string = "http://api-platform.golian.hekko24.pl";

  constructor(private http: HttpClient) { }

  public getPosts(url: string) : Observable<PostCollection>{
    return this.http.get<PostCollection>(this.apiUrl + url);
  }

  public getPost(id: string) : Observable<Post> {
    return this.http.get<Post>(this.apiUrl + "/public/api/posts/" + id);
  }

  public addPost(response: string) : Observable<Post> {
    return this.http.post<Post>(this.apiUrl + "/public/api/posts", response);
  }

  public updatePost(id: number, response: string) : Observable<Post> {
    return this.http.put<Post>(this.apiUrl + "/public/api/posts/" + id, response);
  }

  public deletePost(post: Post) : Observable<Post> {
    return this.http.delete<Post>(this.apiUrl + "/public/api/posts/" + post.id);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }
}
