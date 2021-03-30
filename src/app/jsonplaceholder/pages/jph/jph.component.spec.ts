import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JphComponent } from './jph.component';

describe('JphComponent', () => {
  let component: JphComponent;
  let fixture: ComponentFixture<JphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JphComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
