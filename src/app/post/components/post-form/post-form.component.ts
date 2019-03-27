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

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {}

  submit(post: Post) {
    if(this.model.id != null){
      this.postService.update(this.model.id,post).subscribe((response) => {});
    } 
    else {
      this.postService.add(post).subscribe((response) => {});
    }
    this.router.navigate(['/post']);
  }
}
