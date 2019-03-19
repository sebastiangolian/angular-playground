import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Input() model: Post = null;
  id: number = null;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.id = this.model.id;
  }

  submit(data: any) {
    if(this.id != null){
      this.postService.updatePost(this.id,data).subscribe((response) => {});
    } 
    else {
      this.postService.addPost(data).subscribe((response) => {});
    }
    this.router.navigate(['/post']);
  }
}
