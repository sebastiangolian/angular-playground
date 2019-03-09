// This file should not be modified, as it can be overwritten by the generator.
// The 'Post' class is here for customizations and will not be touched.

import { Comment } from '../Comment';

export class PostBase {
  public static readonly _resource: string = 'posts';
  get _resource(): string { return PostBase._resource; };

  id:number;
  comments: Comment;
  title: string;
  body: string;

  setComments(id: number): PostBase {
    this.comments = new Comment();
    this.comments.id = id;
    this.comments['@id'] = '/comments/' + id;
    return this;
  }

}
