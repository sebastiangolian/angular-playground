import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() post: Post = null;
  constructor() { }

  ngOnInit() {
  }

}
