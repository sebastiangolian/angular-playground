import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './pages/car/car.component';
import { CarItemsComponent } from './components/car-items/car-items.component';
import { CarItemComponent } from './components/car-item/car-item.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CarComponent, CarItemsComponent, CarItemComponent, CarFormComponent],
  imports: [CommonModule, FormsModule, CarRoutingModule],
})
export class CarModule {}
