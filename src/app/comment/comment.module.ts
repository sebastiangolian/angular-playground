import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentByPostComponent } from './components/comment-by-post/comment-by-post.component';

@NgModule({
  declarations: [CommentByPostComponent],
  imports: [
    CommonModule
  ],
  exports: [CommentByPostComponent]
})
export class CommentModule { }
