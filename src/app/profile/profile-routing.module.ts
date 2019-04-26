import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileFormReactiveComponent } from './components/profile-form-reactive/profile-form-reactive.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ProfileFormTemplateDrivenComponent } from './components/profile-form-template-driven/profile-form-template-driven.component';
import { ProfileFormTemplateDrivenModelComponent } from './components/profile-form-template-driven-model/profile-form-template-driven-model.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent
  },
  {
    path: 'reactive',
    component: ProfileFormReactiveComponent
  },
  {
    path: 'template-driven',
    component: ProfileFormTemplateDrivenComponent
  },
  {
    path: 'template-driven-model',
    component: ProfileFormTemplateDrivenModelComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
