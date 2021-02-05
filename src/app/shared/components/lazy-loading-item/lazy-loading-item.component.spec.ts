import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadingItemComponent } from './lazy-loading-item.component';

describe('LazyLoadingItemComponent', () => {
  let component: LazyLoadingItemComponent;
  let fixture: ComponentFixture<LazyLoadingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoadingItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
