import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarItemComponent } from './components/car-item/car-item.component';

@NgModule({
  declarations: [
    CarListComponent,
    CarItemComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule
  ],
  exports: [
    CarListComponent
  ]
})
export class CarModule { }
