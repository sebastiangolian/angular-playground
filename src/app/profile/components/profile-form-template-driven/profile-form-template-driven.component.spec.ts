import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormTemplateDrivenComponent } from './profile-form-template-driven.component';

describe('ProfileFormTemplateDrivenComponent', () => {
  let component: ProfileFormTemplateDrivenComponent;
  let fixture: ComponentFixture<ProfileFormTemplateDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFormTemplateDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFormTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
