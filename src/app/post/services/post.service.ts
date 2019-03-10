import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  apiUrl: string = "http://api-platform.golian.hekko24.pl/";

  constructor(private http: HttpClient) { }

  public getPosts(url: string) {
    return this.http.get<Post[]>(this.apiUrl + url);
  }
}
