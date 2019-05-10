import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFormTemplateDrivenModelComponent } from './profile-form-template-driven-model.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfileFormTemplateDrivenModelComponent', () => {
  let component: ProfileFormTemplateDrivenModelComponent;
  let fixture: ComponentFixture<ProfileFormTemplateDrivenModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFormTemplateDrivenModelComponent ],
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
    fixture = TestBed.createComponent(ProfileFormTemplateDrivenModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
