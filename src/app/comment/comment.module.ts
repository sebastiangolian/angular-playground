import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentByPostComponent } from './components/comment-by-post/comment-by-post.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentCreateComponent } from './components/comment-create/comment-create.component';

@NgModule({
  declarations: [
    CommentByPostComponent, 
    CommentItemComponent, 
    CommentFormComponent, CommentCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommentByPostComponent,
    CommentFormComponent,
    CommentCreateComponent
  ]
})
export class CommentModule { }
