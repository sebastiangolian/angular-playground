import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../models/user-model';

@Component({
  selector: 'app-page-user-registration',
  templateUrl: './page-user-registration.component.html',
  styleUrls: ['./page-user-registration.component.css']
})
export class PageUserRegistrationComponent implements OnInit {

  userModel = new UserModel(
    'Se',
    'password',
    'seba@o2.pl',
    'm');

  url = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  validateEmail(email: string): boolean {
    return (/@/).test(email);
  }

  submit(data) {
    this.http.post(this.url, data)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
