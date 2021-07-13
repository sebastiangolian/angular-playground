import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserServicesComponent } from './form-user-services.component';

describe('FormUserServicesComponent', () => {
  let component: FormUserServicesComponent;
  let fixture: ComponentFixture<FormUserServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormUserServicesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
