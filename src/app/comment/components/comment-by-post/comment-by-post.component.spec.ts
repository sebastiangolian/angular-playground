import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentByPostComponent } from './comment-by-post.component';
import { CommentItemComponent } from '../comment-item/comment-item.component';
import { CommentCreateComponent } from '../comment-create/comment-create.component';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('CommentByPostComponent', () => {
  let component: CommentByPostComponent;
  let fixture: ComponentFixture<CommentByPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CommentByPostComponent,
        CommentItemComponent,
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
    fixture = TestBed.createComponent(CommentByPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
