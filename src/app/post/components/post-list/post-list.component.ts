import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public posts: any = null;
  public firstPage: string = "";
  public currentPage: string = "/public/api/posts?page=1";
  public prevPage: string = "";
  public nextPage: string = "";
  public lastPage: string = "";
  public disabledPrev: boolean = true;
  public disabledNext: boolean = false;

  @Input() page: string = "";

  constructor(private postService: PostService) { }

  public getPaginationLinks(response) {
    this.firstPage = response["hydra:view"]["hydra:first"];
    this.lastPage = response["hydra:view"]["hydra:last"];
    this.prevPage = response["hydra:view"]["hydra:previous"];
    this.nextPage = response["hydra:view"]["hydra:next"];

    if(this.prevPage != undefined) {
      this.disabledPrev = false;
    } else {
      this.disabledPrev = true;
    }

    if(this.nextPage != undefined) {
      this.disabledNext = false;
    } else {
      this.disabledNext = true;
    }
  }

  ngOnInit() {
    this.getPosts();
    this.page = this.currentPage;
  }

  getPosts(): void {
    this.postService.getPosts(this.currentPage).subscribe((response) => {
      this.getPaginationLinks(response);
      this.posts = response["hydra:member"];
    });
  }

  toFirstPage(): void {
    this.currentPage = this.firstPage;
    this.page = this.firstPage;
    this.getPosts();
  }

  toPrevPage(): void {
    this.currentPage = this.prevPage;
    this.page = this.prevPage;
    this.getPosts();
  }

  toNextPage(): void {
    this.currentPage = this.nextPage;
    this.page = this.nextPage;
    this.getPosts();
  }

  toLastPage(): void {
    this.currentPage = this.lastPage;
    this.page = this.lastPage;
    this.getPosts();
  }
}
