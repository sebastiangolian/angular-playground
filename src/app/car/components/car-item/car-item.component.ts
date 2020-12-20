import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../interfaces/car.interface';

@Component({
  selector: 'car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarItemComponent implements OnInit {

  @Input() car: Car|null = null;
  @Input() active: any;
  @Output() carSelected: EventEmitter<Car> = new EventEmitter<Car>();
  @Output() carDeleted: EventEmitter<Car> = new EventEmitter<Car>();
  constructor() { }

  ngOnInit(): void {}

  onSelect(car: Car): void {
    this.carSelected.emit(car);
  }

  onDelete(car: Car): void {
    this.carDeleted.emit(car);
  }

}
