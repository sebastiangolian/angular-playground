import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarOnPushComponent } from './components/car-on-push/car-on-push.component';

const routes: Routes = [
  {
    path: '',
    component: CarListComponent
  },
  {
    path: 'view',
    component: CarOnPushComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
