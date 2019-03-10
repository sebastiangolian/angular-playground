import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) { }

  apiUrl: string = "http://api-platform.golian.hekko24.pl/public/api/";

  public getPosts() {
    return this.http.get<Post[]>(this.apiUrl + "posts");
  }
}
