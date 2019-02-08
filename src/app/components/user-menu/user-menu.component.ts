import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  userIsLogged = false;
  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.updateUserLoggedStatus();
  }

  updateUserLoggedStatus() {
    this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd
    ))
    .subscribe(() => {
      this.userIsLogged = this.auth.isUserLogged();
    });
  }

}
