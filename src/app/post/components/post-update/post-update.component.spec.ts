import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUpdateComponent } from './post-update.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PostFormComponent } from '../post-form/post-form.component';

describe('PostUpdateComponent', () => {
  let component: PostUpdateComponent;
  let fixture: ComponentFixture<PostUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PostUpdateComponent,
        PostFormComponent,
      ],
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
    fixture = TestBed.createComponent(PostUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
