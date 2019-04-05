import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../interfaces/comment';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {

  @Input() comment: Comment = null;
  @Output() refresh: EventEmitter<string> = new EventEmitter();

  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  delete(comment: Comment){
    this.commentService.delete(comment).subscribe(() => {
      this.refresh.emit();
    });
  }

}
