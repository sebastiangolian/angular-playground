import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostUpdateComponent implements OnInit {

  @Input() model: Post;
  @Output() postUpdated: EventEmitter<Post> = new EventEmitter<Post>();
  constructor() { }

  ngOnInit(): void {}

  onFormSubmit(post: Post) {
    this.postUpdated.emit(post)
  }

}
