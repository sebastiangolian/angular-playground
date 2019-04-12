import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentCreateComponent } from './comment-create.component';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('CommentCreateComponent', () => {
  let component: CommentCreateComponent;
  let fixture: ComponentFixture<CommentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CommentCreateComponent,
        CommentFormComponent
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
    fixture = TestBed.createComponent(CommentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
