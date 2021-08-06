import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormDynamicServicesComponent } from './form-dynamic-services.component';

describe('FormDynamicServicesComponent', () => {
  let component: FormDynamicServicesComponent;
  let fixture: ComponentFixture<FormDynamicServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDynamicServicesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDynamicServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
