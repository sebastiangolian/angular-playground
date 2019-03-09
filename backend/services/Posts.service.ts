import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Post } from '../backend-classes';
// import { Observable } from 'rxjs';

@Injectable()
export class PostsService extends BackendService<Post> {
  protected get resource() { return Post._resource; }
  protected get class() { return Post; }

}
