import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { JphUser } from './../interfaces/jph-user';

@Injectable({
  providedIn: 'root',
})
export class JphUserService {
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(protected http: HttpClient) {}

  get(): Observable<JphUser[]> {
    return this.http.get<JphUser[]>(this.url).pipe(first());
  }

  post(user: JphUser): Observable<JphUser> {
    return this.http.post<JphUser>(this.url, user).pipe(first());
  }

  put(user: JphUser): Observable<JphUser> {
    return this.http.put<JphUser>(this.url + '/' + user.id, user).pipe(first());
  }

  delete(user: JphUser): Observable<null> {
    return this.http.delete<null>(this.url + '/' + user.id).pipe(first());
  }
}
