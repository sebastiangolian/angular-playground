import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Car } from '../../interfaces/car.interface';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarItemComponent implements OnInit {

  @Input() car: Car = null;
  public carCostClasses;

  constructor() { }

  ngOnInit() {
    this.carCostClasses = {
      "positive": this.car.active,
      "negative": !this.car.active,
      "large-cost": Math.abs(this.car.cost) > 1000,
      "little-cost": Math.abs(this.car.cost) < 1001,
    };
  }

}
