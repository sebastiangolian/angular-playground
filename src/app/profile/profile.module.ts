import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileCreateReactiveComponent } from './components/profile-create-reactive/profile-create-reactive.component';

@NgModule({
  declarations: [ProfileCreateReactiveComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
