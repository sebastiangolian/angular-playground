import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostUpdateComponent implements OnInit {

  @Input() model: Post|null = null;
  @Output() postUpdated: EventEmitter<Post|null> = new EventEmitter<Post|null>();
  constructor() { }

  ngOnInit(): void {}

  onFormSubmit(post: Post|null) {
    this.postUpdated.emit(post)
  }

}
