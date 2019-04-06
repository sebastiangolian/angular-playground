import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarItemOnPushComponent } from './car-item-on-push.component';

describe('CarItemOnPushComponent', () => {
  let component: CarItemOnPushComponent;
  let fixture: ComponentFixture<CarItemOnPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarItemOnPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarItemOnPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
