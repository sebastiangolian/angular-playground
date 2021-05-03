import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListComponent implements OnInit {
  @Input() posts: Post[] = [];
  @Output() postEdit: EventEmitter<Post> = new EventEmitter();
  @Output() postDelete: EventEmitter<Post> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onEdit(post: Post): void {
    this.postEdit.emit(post);
  }

  onDelete(post: Post): void {
    this.postDelete.emit(post);
  }
}
