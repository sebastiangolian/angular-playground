import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { HeaderService } from 'src/app/shared/services/header.service';
import { of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';

@Component({
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit, OnDestroy {

  idUser: string
  $user: Observable<User>

  private _subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private userService: UserService, private headerService: HeaderService) {
    this.idUser = this.route.snapshot.paramMap.get('id');
    this.headerService.set("User: " + this.idUser)
  }

  ngOnInit(): void {
    this.$user = this.userService.getById(this.idUser).pipe(map(apiUser => apiUser.item))
  }

  ngOnDestroy() {
    if(this._subscription) this._subscription.unsubscribe()
  }

}
