import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { PostModel } from '../../models/post.model';

@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCreateComponent implements OnInit {

  @Input() model: Post;
  @Output() postCreated: EventEmitter<Post> = new EventEmitter<Post>();
  constructor() { }

  ngOnInit(): void {
    this.model = new PostModel("Lorem Ipsum","Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure officia doloremque vero est")
  }

  onFormSubmit(post: Post) {
    this.postCreated.emit(post)
  }

}
