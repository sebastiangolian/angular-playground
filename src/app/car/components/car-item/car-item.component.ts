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
  @Output() setted: EventEmitter<string> = new EventEmitter();
  public carCostClasses: any;

  constructor() { }

  ngOnInit() {
    this.setCarCostClasses();
  }

  toggleActive(car: Car) {
    car.active = !car.active;
  }

  changeCost() {
    if (this.checkActive()) {
      this.car.cost += 1000;
      this.setCarCostClasses();
    }
  }

  set() {
    if (this.checkActive())
      this.setted.emit(this.car.toString());
  }

  setCarCostClasses() {
    if (this.car) {
      this.carCostClasses = {
        "text-success": this.car.cost <= 1000,
        "text-danger": this.car.cost >= 3000
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
