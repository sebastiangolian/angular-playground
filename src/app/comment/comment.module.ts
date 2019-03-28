import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentByPostComponent } from './components/comment-by-post/comment-by-post.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';

@NgModule({
  declarations: [CommentByPostComponent, CommentItemComponent],
  imports: [
    CommonModule
  ],
  exports: [CommentByPostComponent]
})
export class CommentModule { }
