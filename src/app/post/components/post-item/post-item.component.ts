import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() post: Post = null;
  @Output() refresh: EventEmitter<string> = new EventEmitter();
  
  constructor(private postService: PostService) { }

  ngOnInit() {}

  delete(post: Post){
    this.postService.deletePost(post).subscribe(() => {
      this.refresh.emit();
    });
  }

}
