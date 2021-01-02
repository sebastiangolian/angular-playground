import { Photo } from './../interfaces/photo.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from 'src/app/shared/services/abstract.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService extends AbstractService<Photo> {

  constructor(protected http: HttpClient) {
    super(http);
    this.url += '/photo';
  }
}
