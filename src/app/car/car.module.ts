import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarItemComponent } from './components/car-item/car-item.component';
import { CarCreateComponent } from './components/car-create/car-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CarListComponent,
    CarItemComponent,
    CarCreateComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    FormsModule
  ],
  exports: [
    CarListComponent
  ]
})
export class CarModule { }
