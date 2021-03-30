import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JphUserItemsComponent } from './jph-user-items.component';

describe('JphUserItemsComponent', () => {
  let component: JphUserItemsComponent;
  let fixture: ComponentFixture<JphUserItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JphUserItemsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JphUserItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
