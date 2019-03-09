// This file should not be modified, as it can be overwritten by the generator.
// The 'Comment' class is here for customizations and will not be touched.

import { Post } from '../Post';

export class CommentBase {
  public static readonly _resource: string = 'comments';
  get _resource(): string { return CommentBase._resource; };

  id: number;
  post: Post;
  name: string;
  email: string;
  body: string;

  setPost(id: number): CommentBase {
    this.post = new Post();
    this.post.id = id;
    this.post['@id'] = '/posts/' + id;
    return this;
  }

}
