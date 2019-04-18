import { Component } from '@angular/core';
import { Car } from '../../interfaces/car.interface';
import { CarModel } from '../../models/car.model';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent{

  public car: Car;
  public confirmed = false;
  public types = ['sedan', 'hatchback', 'combi'];

  constructor() { 
    this.car = new CarModel(1,"","",0,true);
  }

  public setPrice(price: number) {
    this.car.price = price;
    this.car.previousPrice = price;
  }

  public createCar() {
    console.log('Creating car ', this.car);
  }
}
