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

  constructor() { }

  ngOnInit() {
  }

}
