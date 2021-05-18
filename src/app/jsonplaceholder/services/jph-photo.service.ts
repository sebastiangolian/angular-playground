import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JphPhoto } from '../interfaces/jph-photo';
import { map } from 'rxjs/operators';
import { StringHelper } from 'src/app/shared/helpers/string.helper';

@Injectable({ providedIn: 'root' })
export class JphPhotoService {
  url = 'https://jsonplaceholder.typicode.com/photos';

  constructor(protected http: HttpClient) {}

  get(limit: number = 100, offset: number = 0): Observable<JphPhoto[]> {
    return this.http.get<JphPhoto[]>(this.url).pipe(
      map((items) => items.filter((val, index) => index >= offset && index < limit + offset)),
      map((items) => {
        items.forEach((item) => (item.description = StringHelper.lorem(Math.floor(Math.random() * 10) + 1, '<br />')));
        return items;
      }),
    );
  }
}
