import { Component, OnInit } from '@angular/core';
import { Car } from '../../interfaces/car.interface';
import { CarModel } from '../../models/car.model';

@Component({
  selector: 'app-car-on-push',
  templateUrl: './car-on-push.component.html',
  styleUrls: ['./car-on-push.component.css']
})
export class CarOnPushComponent implements OnInit {

  public car: Car;
  private counter: number = 1;

  constructor() { }

  ngOnInit() {
    this.changeCarObject();
  }

  onToggleActive(car: Car) {
    this.car.active = !this.car.active;
  }

  changeCarObject() {
    this.car = new CarModel(this.counter,'Car - ' + this.counter++, 'type', 1000, true);
  }

  changeCarCost() {
    this.car.cost += 10;
  }
}
