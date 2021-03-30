import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JphUserCompanyComponent } from './jph-user-company.component';

describe('JphUserCompanyComponent', () => {
  let component: JphUserCompanyComponent;
  let fixture: ComponentFixture<JphUserCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JphUserCompanyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JphUserCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
