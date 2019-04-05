import { Component, OnInit } from '@angular/core';
import { CarModel } from '../../models/car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Array<CarModel> = Array<CarModel>();
  
  constructor() { 
    this.cars.push(new CarModel("Honda","sedan"));
    this.cars.push(new CarModel("Seat","hatchback"));
  }

  ngOnInit() {
  }

}
