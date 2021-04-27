import { Hero } from 'src/app/hero/interfaces/hero.interface';
import { Role } from 'src/app/user/interfaces/role.interface';
import { User } from 'src/app/user/interfaces/user.interface';

export interface DbBackend {
  users: User[];
  heros: Hero[];
  roles: Role[];
}
