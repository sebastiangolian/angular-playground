import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../interfaces/car.interface';
import { AbstractService } from 'src/app/shared/services/abstract.service';

@Injectable({providedIn: 'root'})
export class CarService extends AbstractService<Car> {

  constructor(protected http: HttpClient) { 
    super(http) 
    this.url += "/car"
  }
}
