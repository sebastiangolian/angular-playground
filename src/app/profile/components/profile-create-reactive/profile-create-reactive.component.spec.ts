import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCreateReactiveComponent } from './profile-create-reactive.component';

describe('ProfileCreateReactiveComponent', () => {
  let component: ProfileCreateReactiveComponent;
  let fixture: ComponentFixture<ProfileCreateReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCreateReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCreateReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
