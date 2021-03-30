import { Post } from '../interfaces/post.interface';

export class PostModel implements Post {
  id: string;
  title: string;
  body: string;

  constructor(title: string, body: string) {
    this.id = Math.random().toString(36).substring(7);
    this.title = title;
    this.body = body;
  }
}
