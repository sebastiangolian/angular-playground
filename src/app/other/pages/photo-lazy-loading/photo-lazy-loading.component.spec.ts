import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoLazyLoadingComponent } from './photo-lazy-loading.component';

describe('PhotoLazyLoadingComponent', () => {
  let component: PhotoLazyLoadingComponent;
  let fixture: ComponentFixture<PhotoLazyLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoLazyLoadingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoLazyLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
