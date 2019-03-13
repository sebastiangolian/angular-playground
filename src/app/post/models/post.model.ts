import { Post } from '../interfaces/post';

export class PostModel implements Post {
    constructor(
      public id: number,
      public title: string,
      public body: string,
    ) { }
  }