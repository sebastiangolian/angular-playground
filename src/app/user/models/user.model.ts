import { User } from '../interfaces/user.interface';

export class UserModel implements User {
  id: string = '';
  email: string = '';
  zipCode: string = '';
  created: string = '';
  active: boolean | null = null;
  documentLink: string = '';
  idRole: string = '';
}
