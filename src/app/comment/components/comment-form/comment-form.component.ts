import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Post } from 'src/app/post/interfaces/post';
import { Comment } from '../../interfaces/comment';
import { CommentModel } from '../../models/comment.model';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  constructor(private commentService: CommentService) { }

  @Input() post: Post = null;
  @Input() model: Comment = null;

  ngOnInit() {
    this.model = new CommentModel();
    this.model.post = this.post["@id"];
  }

  submit(comment: Comment) {
    this.commentService.add(comment).subscribe((response) => {});
  }
}
