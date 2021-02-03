import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JphPhoto } from '../interfaces/jph-photo';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class JphPhotoService {

  url = 'https://jsonplaceholder.typicode.com/photos';

  constructor(protected http: HttpClient) { }

  get(limit: number = 100, offset: number = 0): Observable<JphPhoto[]> {
    return this.http.get<JphPhoto[]>(this.url).pipe(
      map(items => items.filter((val, index) => index >= offset && index < limit + offset)),
    )
  }
}
