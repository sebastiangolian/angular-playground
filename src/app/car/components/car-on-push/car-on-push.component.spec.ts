import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOnPushComponent } from './car-on-push.component';

describe('CarOnPushComponent', () => {
  let component: CarOnPushComponent;
  let fixture: ComponentFixture<CarOnPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarOnPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOnPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
