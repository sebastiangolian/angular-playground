import { Component, OnInit} from '@angular/core';
import { CarModel } from '../../models/car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Array<CarModel> = Array<CarModel>();
  currentCar:string = "";
  counter: number = 0;
  
  constructor() { 
    this.cars.push(new CarModel(1,"Honda","sedan",1000,true));
    this.cars.push(new CarModel(2,"Seat","hatchback",3000,false));
  }

  ngOnInit() {
  }

  onSet(str:string) {
    this.currentCar = str;
    this.counter++;
  }
}