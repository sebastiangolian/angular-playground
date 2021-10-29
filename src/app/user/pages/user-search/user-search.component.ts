import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { HeaderService } from 'src/app/shared/services/header.service';
import { User } from '../../interfaces/user.interface';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
})
export class UserSearchComponent {
  item: User = new UserModel();
  caption = '';

  constructor(private userService: UserService, private headerService: HeaderService) {
    this.headerService.set('User search');
  }

  onSearch(value: string): void {
    if (value.length > 0) {
      this.search(value);
    } else {
      this.item = new UserModel();
    }
  }

  search(id: string): Subscription {
    return this.userService
      .getById(id)
      .pipe(
        debounceTime(500),
        tap((user) => {
          if (user.item) {
            this.caption = '';
            this.item = user.item;
          } else {
            this.caption = 'Is not exist';
            this.item = new UserModel();
          }
        }),
      )
      .subscribe();
  }
}
