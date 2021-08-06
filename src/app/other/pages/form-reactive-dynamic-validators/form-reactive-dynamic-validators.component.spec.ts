import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveDynamicValidatorsComponent } from './form-reactive-dynamic-validators.component';

describe('FormReactiveDynamicValidatorsComponent', () => {
  let component: FormReactiveDynamicValidatorsComponent;
  let fixture: ComponentFixture<FormReactiveDynamicValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormReactiveDynamicValidatorsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReactiveDynamicValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
