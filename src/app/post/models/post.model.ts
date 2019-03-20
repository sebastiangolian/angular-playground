import { Post } from '../interfaces/post';

export class PostModel implements Post {
  '@id': string;
  '@type': string;
  id: number;
  title: string;
  body: string;

  constructor() { }
}