import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileFormReactiveComponent } from './components/profile-form-reactive/profile-form-reactive.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileFormReactiveComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
