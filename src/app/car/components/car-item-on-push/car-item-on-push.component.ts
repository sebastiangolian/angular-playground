import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../interfaces/car.interface';

@Component({
  selector: 'app-car-item-on-push',
  templateUrl: './car-item-on-push.component.html',
  styleUrls: ['./car-item-on-push.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarItemOnPushComponent {

  @Input() public car: Car;
  @Output() private toggleActive: EventEmitter<Car> = new EventEmitter<Car>();

  constructor() {}

  onToggleActive(event) {
    this.toggleActive.emit(this.car);
  }
}
