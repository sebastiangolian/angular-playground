import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JphUserFormComponent } from './jph-user-form.component';

describe('JphUserFormComponent', () => {
  let component: JphUserFormComponent;
  let fixture: ComponentFixture<JphUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JphUserFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JphUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
