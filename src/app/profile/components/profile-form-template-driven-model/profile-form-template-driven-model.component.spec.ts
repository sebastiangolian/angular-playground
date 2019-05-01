import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormTemplateDrivenModelComponent } from './profile-form-template-driven-model.component';

describe('ProfileFormTemplateDrivenModelComponent', () => {
  let component: ProfileFormTemplateDrivenModelComponent;
  let fixture: ComponentFixture<ProfileFormTemplateDrivenModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFormTemplateDrivenModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFormTemplateDrivenModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});