import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { PostModel } from '../../models/post.model';

@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCreateComponent implements OnInit {
  @Input() model: Post | null = null;
  @Output() postCreate: EventEmitter<Post | null> = new EventEmitter<Post | null>();
  constructor() {}

  ngOnInit(): void {
    this.model = new PostModel(
      'Lorem Ipsum',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure officia doloremque vero est',
    );
  }

  onFormSubmit(post: Post | null): void {
    this.postCreate.emit(post);
  }
}
