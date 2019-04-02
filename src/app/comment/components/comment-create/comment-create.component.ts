import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommentModel } from '../../models/comment.model';
import { Post } from 'src/app/post/interfaces/post';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {

  @Input() post: Post = null;
  @Output() refresh: EventEmitter<string> = new EventEmitter();
  comment:CommentModel = new CommentModel();
  
  constructor() { }

  ngOnInit() {

  }

  refreshEmit()
  {
    this.refresh.emit();
  }
}
