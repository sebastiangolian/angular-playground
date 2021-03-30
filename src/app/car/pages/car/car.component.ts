import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { HeaderService } from 'src/app/shared/services/header.service';
import { MessageService } from 'src/app/shared/services/message.service';
import { Car } from '../../interfaces/car.interface';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit, OnDestroy {
  cars: Observable<Car[]> = new Observable<Car[]>();
  updatedCar: Car = { id: '', brand: '', name: '' };
  isUpdated = false;
  private subscription: Subscription = new Subscription();

  constructor(private headerService: HeaderService, private carService: CarService, private messageService: MessageService) {
    this.headerService.set('Cars');
  }

  ngOnInit(): void {
    this.reload();
  }

  onCarSave(car: Car): void {
    if (this.isUpdated) {
      this.subscription.add(this.updateSubscription(car));
    } else {
      this.subscription.add(this.createSubscription(car));
    }
  }

  onSelect(car: Car): void {
    this.isUpdated = true;
    this.updatedCar = car;
  }

  onDelete(car: Car): void {
    this.subscription.add(this.deleteSubscription(car));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private reload(): void {
    this.cars = this.carService.get().pipe(map((api) => api.items));
    this.isUpdated = false;
  }

  private createSubscription(car: Car): Subscription {
    return this.carService.post(car).subscribe((result) => {
      this.updatedCar = result;
      this.reload();
      this.messageService.sendMessage('Added new car');
      setTimeout(() => {
        this.updatedCar = this.emptyCar();
      }, 2000);
    });
  }

  private updateSubscription(car: Car): Subscription {
    return this.carService.update(car.id, car).subscribe((result) => {
      this.updatedCar = result;
      this.reload();
      this.messageService.sendMessage('Updated car');
      setTimeout(() => {
        this.updatedCar = this.emptyCar();
      }, 2000);
    });
  }

  private deleteSubscription(car: Car): Subscription {
    return this.carService.delete(car.id.toString()).subscribe((result) => {
      this.reload();
      this.messageService.sendMessage('Deleted car');
    });
  }

  private emptyCar(): Car {
    return { id: '', brand: '', name: '' };
  }
}
