import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HydraApiPaginationComponent } from './hydra-api-pagination.component';

describe('HydraApiPaginationComponent', () => {
  let component: HydraApiPaginationComponent;
  let fixture: ComponentFixture<HydraApiPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HydraApiPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HydraApiPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
