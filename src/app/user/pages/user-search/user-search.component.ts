import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { HeaderService } from 'src/app/shared/services/header.service';
import { debounceTime, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit, OnDestroy {

  item: User
  caption: string

  private _subscription: Subscription = new Subscription();

  constructor(private userService: UserService, private headerService: HeaderService) {
    this.headerService.set("User search")
  }

  ngOnInit(): void {}
  
  onSearch(id:string) {
    if(id.length > 0) {
      this._subscription.add(this.search(id))   
    } else {
      this.caption = ""
      this.item = null
    }
  }

  search(id:string): Subscription {
    return this.userService.getById(id).pipe(
      debounceTime(500),
      tap(user => {
        if(user.item) {
          this.caption = ""
          this.item = user.item
        } else {
          this.caption = "Is not exist"
          this.item = null
        }
        
      })
    ).subscribe()
  }

  ngOnDestroy() {
    if(this._subscription) this._subscription.unsubscribe()
  }
}
