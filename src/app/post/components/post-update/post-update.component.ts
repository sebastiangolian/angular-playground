import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {

  post:PostModel = new PostModel(0,"","");
  
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.post.id = Number(id);
    this.getPost(id);
  }

  getPost(id: string): void {
    this.postService.getPost(id).subscribe((response) => {
      this.post = response;
    });
  }
}