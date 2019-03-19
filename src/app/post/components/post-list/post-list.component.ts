import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public posts: Post[] = null;
  public response: string = null;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts("/public/api/posts?page=1");
  }

  getPosts(url: string): void {
    this.postService.getPosts(url).subscribe((response) => {
      this.response = response;
      this.posts = response["hydra:member"];
    });
  }

  delete(post: Post){
    this.postService.deletePost(post).subscribe(() => {
      this.ngOnInit();
    });
  }
}
