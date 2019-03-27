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
  private filterMap: Map<string, string> = new Map();

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts("/public/api/posts?page=1");
  }

  getPosts(url: string): void {
    this.postService.getAll(url).subscribe((response) => {
      this.hydraViewCollection = response["hydra:view"];
      this.posts = response["hydra:member"];
    });
  }

  delete(post: Post) {
    this.postService.delete(post).subscribe(() => {
      this.ngOnInit();
    });
  }

  onEnter(name: string, value: string): void {
    this.filterMap.set(name, value);
    this.getPosts("/public/api/posts" + this.generateFilter());
  }

  private generateFilter() : string
  {
    let filter: string = "";
    this.filterMap.forEach((value, key) => {
      if (value != "") {
        if (filter == "") {
          filter += "?";
        }
        else {
          filter += "&";
        }

        filter += key + "=" + value;
      }
    })
    return filter;
  }
}
