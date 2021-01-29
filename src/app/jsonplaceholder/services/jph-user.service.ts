import { Observable } from 'rxjs';
import { JphUser } from './../interfaces/jph-user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JphUserService {

  url: string = 'https://jsonplaceholder.typicode.com/users'

  constructor(protected http: HttpClient) { }

  get(): Observable<JphUser[]> {
    return this.http.get<JphUser[]>(this.url)
  }

  post(user: JphUser): Observable<JphUser> {
    return this.http.post<JphUser>(this.url, user)
  }

  put(user: JphUser): Observable<JphUser> {
    return this.http.put<JphUser>(this.url + "/" + user.id, user)
  }

  delete(user: JphUser): Observable<null> {
    return this.http.delete<null>(this.url + "/" + user.id)
  }

}
