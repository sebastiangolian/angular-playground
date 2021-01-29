import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JphUserAddressComponent } from './jph-user-address.component';

describe('JphUserAddressComponent', () => {
  let component: JphUserAddressComponent;
  let fixture: ComponentFixture<JphUserAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JphUserAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JphUserAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
