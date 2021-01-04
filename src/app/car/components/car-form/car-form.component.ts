import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { Car } from '../../interfaces/car.interface';

@Component({
  selector: 'car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarFormComponent implements OnInit {

  @Input() car: Car|null = null;
  @Output() carSaved: EventEmitter<Car|null> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSave(): void {
    this.carSaved.emit(this.car);
  }

}