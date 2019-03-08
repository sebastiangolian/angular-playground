import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../interfaces/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  fetchPosts()  {
    return <Promise<Posts>> this.http.get("http://api-platform.golian.hekko24.pl/public/api/posts").toPromise();
  }
}
