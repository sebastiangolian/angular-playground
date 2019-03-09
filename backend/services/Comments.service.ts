import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Comment } from '../backend-classes';
// import { Observable } from 'rxjs';

@Injectable()
export class CommentsService extends BackendService<Comment> {
  protected get resource() { return Comment._resource; }
  protected get class() { return Comment; }

}
