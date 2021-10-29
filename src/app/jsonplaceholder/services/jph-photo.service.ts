import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { StringHelper } from 'src/app/shared/helpers/string.helper';
import { JphPhoto } from '../interfaces/jph-photo';

@Injectable({ providedIn: 'root' })
export class JphPhotoService {
  url = 'https://jsonplaceholder.typicode.com/photos';

  constructor(protected http: HttpClient) {}

  get(limit: number = 100, offset: number = 0): Observable<JphPhoto[]> {
    return this.http.get<JphPhoto[]>(this.url).pipe(
      first(),
      map((items) => items.filter((val, index) => index >= offset && index < limit + offset)),
      map((items) => {
        items.forEach((item) => (item.description = StringHelper.lorem(Math.floor(Math.random() * 10) + 1, '<br />')));
        return items;
      }),
    );
  }
}
