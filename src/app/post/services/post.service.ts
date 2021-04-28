import { Post } from './../interfaces/post.interface';
import { Injectable } from '@angular/core';
import { AbstractService } from 'src/app/shared/services/abstract.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService extends AbstractService<Post> {
  constructor(protected http: HttpClient) {
    super(http);
    this.url += '/post';
  }
}
