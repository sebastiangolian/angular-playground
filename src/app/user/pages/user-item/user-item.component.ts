import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { HeaderService } from 'src/app/shared/services/header.service';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent {
  idUser = '';
  $user: Observable<User> = new Observable();

  constructor(private route: ActivatedRoute, private userService: UserService, private headerService: HeaderService) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.idUser = id;
    }
    this.headerService.set('User: ' + this.idUser);
    this.$user = this.userService.getById(this.idUser).pipe(map((apiUser) => apiUser.item));
  }
}
