import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public posts: any = null;
  public firstPage: string = "public/api/posts?page=1";
  public prevPage: string = "";
  public nextPage: string = "";
  public lastPage: string = "";

  @Input() collectionSize : number = 100;
  @Input() pageSize  : number = 30;
  @Input() page : number = 1;

  constructor(private postService: PostService) { }

  public getPaginationLinks(response) {
    console.log(response);
    this.firstPage = response["hydra:view"]["hydra:first"];
    this.lastPage = response["hydra:view"]["hydra:last"];
    this.prevPage = response["hydra:view"]["hydra:previous"];
    this.nextPage = response["hydra:view"]["hydra:next"];
    console.log("this.firstPage",this.firstPage);
    console.log("this.lastPage",this.lastPage);
    console.log("this.prevPage",this.prevPage);
    console.log("this.nextPage",this.nextPage);
  }

  ngOnInit() {
    this.postService.getPosts(this.firstPage).subscribe((response)=>{
        this.getPaginationLinks(response);
        this.posts = response["hydra:member"];  
    });
  }

  changePage() {
    this.page = this.page + 1;
  }
}
