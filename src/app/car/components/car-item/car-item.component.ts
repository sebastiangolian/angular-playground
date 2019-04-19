import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Car } from '../../interfaces/car.interface';
import { CarModel } from '../../models/car.model';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  @Input() car: CarModel = null;
  @Output() setted: EventEmitter<CarModel> = new EventEmitter();
  public carPriceClasses: any;

  constructor() { }

  ngOnInit() {
    this.setCarPriceClasses();
  }

  toggleActive(car: Car) {
    car.active = !car.active;
  }

  changePrice() {
    if (this.checkActive()) {
      this.car.price += 1000;
      this.setCarPriceClasses();
    }
  }

  set() {
    if (this.checkActive())
      this.setted.emit(this.car);
  }

  setCarPriceClasses() {
    if (this.car) {
      this.carPriceClasses = {
        "text-success": this.car.price <= 1000,
        "text-danger": this.car.price >= 3000
      };
    }
  }

  checkActive(): boolean {
    if (this.car.active) {
      return true;
    } else {
      alert("This car is not active");
      return false;
    }
  }
}
