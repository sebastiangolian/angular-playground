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

  ngOnInit() {
  }

  submit(data: any) {
    if(data["id"]){
      this.postService.updatePost(data["id"],data).subscribe((response) => {});
    } 
    else {
      this.postService.addPost(data).subscribe((response) => {});
    }
    
    this.router.navigate(['/post']);
  }

}
