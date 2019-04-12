import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailComponent } from './post-detail.component';
import { CommentByPostComponent } from 'src/app/comment/components/comment-by-post/comment-by-post.component';
import { CommentItemComponent } from 'src/app/comment/components/comment-item/comment-item.component';
import { CommentCreateComponent } from 'src/app/comment/components/comment-create/comment-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { CommentFormComponent } from 'src/app/comment/components/comment-form/comment-form.component';

describe('PostDetailComponent', () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PostDetailComponent,
        CommentByPostComponent,
        CommentItemComponent,
        CommentCreateComponent,
        CommentFormComponent,
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
    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
