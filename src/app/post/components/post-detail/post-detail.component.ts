import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  public post: Post = null;
  constructor(private route: ActivatedRoute, private postService: PostService, public location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getPost(id);
  }

  getPost(id: string): void {
    this.postService.getPost(id).subscribe((response) => {
      this.post = response;
    });
  }
}
