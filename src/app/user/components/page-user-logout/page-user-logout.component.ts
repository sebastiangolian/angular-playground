import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-user-logout',
  templateUrl: './page-user-logout.component.html',
  styleUrls: ['./page-user-logout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageUserLogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.destroyUserSession();
    this.backToHome();
  }

  backToHome() {
    this.router.navigate(['']);
  }
}
