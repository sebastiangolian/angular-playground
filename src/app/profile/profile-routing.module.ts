import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileCreateReactiveComponent } from './components/profile-create-reactive/profile-create-reactive.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileCreateReactiveComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
