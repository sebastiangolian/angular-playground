import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../models/post.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  model:PostModel = new PostModel(0,"","");
  postCreateForm: FormGroup;
  constructor(private postService: PostService) { }

  ngOnInit() {
   
  }

  submit(data: any) {
    this.postService.addPost(data).subscribe((response) => {
      console.log(response);
    });
  }
}
