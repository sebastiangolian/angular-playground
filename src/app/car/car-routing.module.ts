import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarCreateComponent } from './components/car-create/car-create.component';

const routes: Routes = [
  {
    path: '',
    component: CarListComponent
  },
  {
    path: 'create',
    component: CarCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
