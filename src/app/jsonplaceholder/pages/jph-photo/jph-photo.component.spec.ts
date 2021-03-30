import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JphPhotoComponent } from './jph-photo.component';

describe('JphPhotoComponent', () => {
  let component: JphPhotoComponent;
  let fixture: ComponentFixture<JphPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JphPhotoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JphPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
