import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JphUserModalComponent } from './jph-user-modal.component';

describe('JphUserModalComponent', () => {
  let component: JphUserModalComponent;
  let fixture: ComponentFixture<JphUserModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JphUserModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JphUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
