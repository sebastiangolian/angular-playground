import { Comment } from '../interfaces/comment';

export class CommentModel implements Comment {
    '@id': string;
    '@type': string;
    id: number;
    name: string;
    email: string;
    body: string;
    post: string;

    constructor() { }
}