import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';
import { PostModel } from '../../models/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  public post: Post = null;
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.post = new PostModel(1,"title","body");
    this.getPost(id);
  }

  getPost(id: string): void {
    this.postService.getPost(id).subscribe((response) => {
      this.post = response;
    });
  }
}
