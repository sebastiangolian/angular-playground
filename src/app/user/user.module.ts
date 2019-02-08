import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PageUserRegistrationComponent } from './components/page-user-registration/page-user-registration.component';
import { PageUserLoginComponent } from './components/page-user-login/page-user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PageUserLogoutComponent } from './components/page-user-logout/page-user-logout.component';

@NgModule({
  declarations: [
    PageUserRegistrationComponent,
    PageUserLoginComponent,
    PageUserLogoutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UserModule { }
