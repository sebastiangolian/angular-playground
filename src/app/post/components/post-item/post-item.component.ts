import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItemComponent implements OnInit {

  @Input() model: Post|null = null;
  @Output() postEdited: EventEmitter<Post> = new EventEmitter();
  @Output() postDeleted: EventEmitter<Post> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onEdit(post: Post): void {
    this.postEdited.emit(post);
  }

  onDelete(post: Post): void {
    this.postDeleted.emit(post);
  }
}
