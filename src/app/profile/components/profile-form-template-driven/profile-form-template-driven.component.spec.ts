import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormTemplateDrivenComponent } from './profile-form-template-driven.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfileFormTemplateDrivenComponent', () => {
  let component: ProfileFormTemplateDrivenComponent;
  let fixture: ComponentFixture<ProfileFormTemplateDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFormTemplateDrivenComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ]
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
