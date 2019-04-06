import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../interfaces/car.interface';

@Component({
  selector: 'app-car-item-on-push',
  templateUrl: './car-item-on-push.component.html',
  styleUrls: ['./car-item-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarItemOnPushComponent implements OnInit {

  @Input() public car: Car;
  @Output() private toggleActive: EventEmitter<Car>;

  constructor() {
    this.toggleActive = new EventEmitter<Car>();
  }

  ngOnInit() {
  }

  onToggleActive(event) {
    this.toggleActive.emit(this.car);
  }

  changeCarCost() {
    this.car.cost += 5;
}

}
