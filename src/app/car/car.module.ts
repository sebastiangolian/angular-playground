import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarItemComponent } from './components/car-item/car-item.component';
import { CarItemOnPushComponent } from './components/car-item-on-push/car-item-on-push.component';
import { CarOnPushComponent } from './components/car-on-push/car-on-push.component';

@NgModule({
  declarations: [
    CarListComponent,
    CarItemComponent,
    CarItemOnPushComponent,
    CarOnPushComponent
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
