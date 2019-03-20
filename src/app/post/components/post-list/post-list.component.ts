import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';
import { HydraPartialCollectionView } from '../../../hydra-api/interfaces/hydra-partial-collection-view';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public posts: Post[] = null;
  public hydraViewCollection: HydraPartialCollectionView = null;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts("/public/api/posts?page=1");
  }

  getPosts(url: string): void {
    this.postService.getPosts(url).subscribe((response) => {
      this.hydraViewCollection = response["hydra:view"];
      this.posts = response["hydra:member"];
    });
  }

  delete(post: Post){
    this.postService.deletePost(post).subscribe(() => {
      this.ngOnInit();
    });
  }
}
