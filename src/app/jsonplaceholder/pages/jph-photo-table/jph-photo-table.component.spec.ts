import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JphPhotoTableComponent } from './jph-photo-table.component';

describe('JphPhotoTableComponent', () => {
  let component: JphPhotoTableComponent;
  let fixture: ComponentFixture<JphPhotoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JphPhotoTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JphPhotoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
