import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../interfaces/car.interface';

@Component({
  selector: 'car-items',
  templateUrl: './car-items.component.html',
  styleUrls: ['./car-items.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarItemsComponent implements OnInit {

  @Input() cars: Car[] = [];
  @Input() updateCar: Car|null = null;
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
