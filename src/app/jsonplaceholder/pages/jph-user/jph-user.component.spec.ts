import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JphUserComponent } from './jph-user.component';

describe('JphUserComponent', () => {
  let component: JphUserComponent;
  let fixture: ComponentFixture<JphUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JphUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JphUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
