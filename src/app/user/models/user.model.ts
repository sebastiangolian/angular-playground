import { User } from '../interfaces/user.interface';

export class UserModel implements User {
  id = '';
  email = '';
  zipCode = '';
  created = '';
  active = true;
  documentLink = '';
  idRole = '';
}
