import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HeaderService } from 'src/app/shared/services/header.service';
import { MessageService } from 'src/app/shared/services/message.service';
import { Car } from '../../interfaces/car.interface';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Observable<Car[]> = new Observable<Car[]>();
  updatedCar: Car = {id: '', brand: '', name: ''};

  constructor(private headerService: HeaderService, private carService: CarService, private messageService: MessageService) {
    this.headerService.set('Cars');
  }

  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.cars = this.carService.get().pipe(
      map(api => api.items)
    );
  }

  onCarSave(car: Car|null) {
    if (car) {
      this.carService.getById(car.id.toString()).subscribe(
        item => {
          if (item.item) {
            this.carService.update(item.item.id.toString(), car).subscribe((result) => {
              this.updatedCar = result;
              this.reload();
              this.messageService.sendMessage('Updated car');
              setTimeout(() => {this.updatedCar = this.emptyCar(); }, 2000);
            });
          } else {
            this.carService.post(car).subscribe((result) => {
              this.updatedCar = result;
              this.reload();
              this.messageService.sendMessage('Added new car');
              setTimeout(() => {this.updatedCar = this.emptyCar(); }, 2000);
            });
          }
        }
      );
    }
  }

  onSelect(car: Car) {
    this.updatedCar = car;
  }

  onDelete(car: Car) {
    this.carService.delete(car.id.toString()).subscribe((result) => {
      this.reload();
      this.messageService.sendMessage('Deleted car');
    });
  }

  emptyCar() {
    return {id: '', brand: '', name: ''};
  }
}
