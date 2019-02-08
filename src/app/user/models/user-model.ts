import { UserProfile } from '../interfaces/user-profile.interface';

export class UserModel implements UserProfile {
  constructor(
    public username: string,
    public password: string,
    public email: string,
    public sex: string,
  ) { }
}
