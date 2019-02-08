import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/user/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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
