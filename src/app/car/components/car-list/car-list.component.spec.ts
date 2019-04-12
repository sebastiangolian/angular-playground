import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListComponent } from './car-list.component';
import { CarItemComponent } from '../car-item/car-item.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CarListComponent', () => {
  let component: CarListComponent;
  let fixture: ComponentFixture<CarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CarItemComponent,
        CarListComponent
       ],
      imports: [
        RouterTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
