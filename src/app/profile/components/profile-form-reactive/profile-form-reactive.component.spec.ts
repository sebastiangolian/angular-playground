import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormReactiveComponent } from './profile-form-reactive.component';

describe('ProfileFormReactiveComponent', () => {
  let component: ProfileFormReactiveComponent;
  let fixture: ComponentFixture<ProfileFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
