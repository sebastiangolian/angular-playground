import { Injectable } from '@angular/core';
import { UserCredentials } from '../interfaces/user-credentials.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersStoreService {
  users = [
    { email: 'test@o2.pl', password: '123' },
    { email: 'test123@o2.pl', password: '12345' },
  ];

  check(usersCredentials: UserCredentials) {
    return this.users.find((user) => {
      return user.email === usersCredentials.email &&
        user.password === usersCredentials.password;
    }) !== undefined;
  }
}
