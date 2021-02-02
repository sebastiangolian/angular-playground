import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { HeaderService } from 'src/app/shared/services/header.service';
import { debounceTime, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { UserModel } from '../../models/user.model';

@Component({
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit, OnDestroy {

  item: User = new UserModel();
  caption = '';

  private subscription: Subscription = new Subscription();

  constructor(private userService: UserService, private headerService: HeaderService) {
    this.headerService.set('User search');
  }

  ngOnInit(): void { }

  onSearch(value: string): void {
    if (value.length > 0) {
      this.subscription.add(this.search(value));
    }
    else {
      this.item = new UserModel()
    }
  }

  search(id: string): Subscription {
    return this.userService.getById(id).pipe(
      debounceTime(500),
      tap(user => {
        if (user.item) {
          this.caption = '';
          this.item = user.item;
        } else {
          this.caption = 'Is not exist';
          this.item = new UserModel();
        }

      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    if (this.subscription) { this.subscription.unsubscribe(); }
  }
}
