import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormReactiveComponent } from './profile-form-reactive.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfileFormReactiveComponent', () => {
  let component: ProfileFormReactiveComponent;
  let fixture: ComponentFixture<ProfileFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFormReactiveComponent ],
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
    fixture = TestBed.createComponent(ProfileFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
