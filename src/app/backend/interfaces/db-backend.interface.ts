import { Hero } from 'src/app/hero/interfaces/hero.interface';
import { Post } from 'src/app/post/interfaces/post.interface';
import { Role } from 'src/app/user/interfaces/role.interface';
import { User } from 'src/app/user/interfaces/user.interface';

export interface DbBackend {
  heros: Hero[];
  posts: Post[];
  users: User[];
  roles: Role[];
}
