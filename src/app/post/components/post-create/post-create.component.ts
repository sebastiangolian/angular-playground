import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../models/post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  post:PostModel = new PostModel();
  
  constructor() { }

  ngOnInit() {
   
  }
}
