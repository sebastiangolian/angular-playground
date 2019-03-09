import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Posts } from '../../interfaces/posts';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public posts: any = null;
  constructor(private postService: PostService) { }

  async ngOnInit() {
      this.posts = await this.postService.fetchPosts();
      console.log(this.posts);
  }
}
