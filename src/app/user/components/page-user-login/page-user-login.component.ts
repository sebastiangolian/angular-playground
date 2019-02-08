import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, EmailValidator, FormBuilder } from '@angular/forms';
import { forbiddenEmail } from 'src/app/validators/forbiddenEmail.validator';
import { AuthService } from '../../services/auth.service';
import { UserCredentials } from '../../interfaces/user-credentials.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-user-login',
  templateUrl: './page-user-login.component.html',
  styleUrls: ['./page-user-login.component.css']
})
export class PageUserLoginComponent implements OnInit {

  get email() {
    return this.loginFormGroup.get('email');
  }

  get password() {
    return this.loginFormGroup.get('password');
  }

  // loginFormGroup = new FormGroup({
  //   email: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(3),
  //     forbiddenEmail
  //   ]),
  //   password: new FormControl('', Validators.required)
  // });

  loginFormGroup = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.minLength(3),
      forbiddenEmail
    ]],
    password: ['', [
      Validators.required
    ]]
  });

  authError: string = null;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.email.setValue('test@wp.pl');
    // this.password.setValue('12345');

    this.loginFormGroup.patchValue({
      'email': 'test@o2.pl',
      'password': '123'
    });
  }

  validateField(fieldName: string) {
    const field = this.loginFormGroup.get(fieldName);
    return field.errors && field.touched;
  }

  onSubmit() {
    const data: UserCredentials = this.loginFormGroup.getRawValue();
    console.log(data);
    const status = this.auth.authenticate(data);
    if (status) {
      this.router.navigate(['/movies']);
    } else {
      this.authError = 'Error in authorization';
    }
    console.log(status);
  }
}
