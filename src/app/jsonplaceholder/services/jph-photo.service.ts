import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JphPhoto } from '../interfaces/jph-photo';

@Injectable({ providedIn: 'root' })
export class JphPhotoService {

  url = 'https://jsonplaceholder.typicode.com/photos';

  constructor(protected http: HttpClient) { }

  get(): Observable<JphPhoto[]> {
    return this.http.get<JphPhoto[]>(this.url);
  }
}
