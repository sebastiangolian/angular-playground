import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/post/interfaces/post';
import { Comment } from 'src/app/comment/interfaces/comment';
import { CommentService } from '../../services/comment.service';
import { HydraPartialCollectionView } from 'src/app/hydra-api/interfaces/hydra-partial-collection-view';

@Component({
  selector: 'app-comment-by-post',
  templateUrl: './comment-by-post.component.html',
  styleUrls: ['./comment-by-post.component.css']
})
export class CommentByPostComponent implements OnInit {

  @Input() post: Post = null;
  @Output() refresh: EventEmitter<string> = new EventEmitter();

  public comments: Comment[] = null;
  public hydraViewCollection: HydraPartialCollectionView = null;
  
  constructor(private commentService: CommentService) { }

  ngOnInit() {
    if(this.post) {
      this.getComments("/public/api/comments?post="+this.post.id);
    }
  }

  getComments(url: string): void {
    this.commentService.getAll(url).subscribe((response) => {
      this.hydraViewCollection = response["hydra:view"];
      this.comments = response["hydra:member"];
    });
  }

}
