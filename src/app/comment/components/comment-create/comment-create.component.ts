import { Component, OnInit, Input } from '@angular/core';
import { CommentModel } from '../../models/comment.model';
import { Post } from 'src/app/post/interfaces/post';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {

  @Input() post: Post = null;
  comment:CommentModel = new CommentModel();

  constructor() { }

  ngOnInit() {
  }

}
