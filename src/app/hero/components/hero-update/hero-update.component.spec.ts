import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroUpdateComponent } from './hero-update.component';

describe('HeroUpdateComponent', () => {
  let component: HeroUpdateComponent;
  let fixture: ComponentFixture<HeroUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
