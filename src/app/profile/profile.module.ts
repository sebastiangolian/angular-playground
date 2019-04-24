import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileFormReactiveComponent } from './components/profile-form-reactive/profile-form-reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileFormTemplateDrivenComponent } from './components/profile-form-template-driven/profile-form-template-driven.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';

@NgModule({
  declarations: [
    ProfileFormReactiveComponent,
    ProfileFormTemplateDrivenComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
