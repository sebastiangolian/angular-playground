import { heroData } from '../data/hero.data';
import { postData } from '../data/post.data';
import { roleData } from '../data/role.data';
import { userData } from '../data/user.data';
import { DbBackend } from '../interfaces/db-backend.interface';

export class DbBackendModel implements DbBackend {
  posts = postData;
  heros = heroData;
  users = userData;
  roles = roleData;
}
