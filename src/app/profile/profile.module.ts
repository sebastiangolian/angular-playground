import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileFormReactiveComponent } from './components/profile-form-reactive/profile-form-reactive.component';

@NgModule({
  declarations: [
    ProfileFormReactiveComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
