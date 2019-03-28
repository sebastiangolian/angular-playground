import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentByPostComponent } from './components/comment-by-post/comment-by-post.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CommentByPostComponent, 
    CommentItemComponent, 
    CommentFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommentByPostComponent,
    CommentFormComponent
  ]
})
export class CommentModule { }
