import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserAliasesComponent } from './form-user-aliases.component';

describe('FormUserAliasesComponent', () => {
  let component: FormUserAliasesComponent;
  let fixture: ComponentFixture<FormUserAliasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormUserAliasesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserAliasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
