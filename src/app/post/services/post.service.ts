import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  apiUrl: string = "http://api-platform.golian.hekko24.pl";

  constructor(private http: HttpClient) { }

  public getPosts(url: string) {
    return this.http.get<string>(this.apiUrl + url);
  }

  public getPost(id: string) {
    return this.http.get<Post>(this.apiUrl + "/public/api/posts/" + id);
  }

  public addPost(response: string) {
    return this.http.post<Post>(this.apiUrl + "/public/api/posts", response);
  }

  public updatePost(id: string, response: string) {
    return this.http.put<Post>(this.apiUrl + "/public/api/posts/" + id, response);
  }

  public deletePost(post: Post) {
    return this.http.delete<Post>(this.apiUrl + "/public/api/posts/" + post.id);
  }
}
