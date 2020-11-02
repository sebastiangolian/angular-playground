import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';
import { Post } from '../../interfaces/post.interface';
import { PostModel } from '../../models/post.model';

@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[] = []
  isCreatedPost: boolean = null
  updatedPost: Post = null

  constructor(private headerService: HeaderService, private changeDetectorRef: ChangeDetectorRef) { 
    this.headerService.set("Artykuły")
  }

  ngOnInit(): void {
    this.posts = [
      new PostModel("Lorem ipsum 3", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure officia doloremque vero est"),
      new PostModel("Lorem ipsum 2", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure officia doloremque vero est"),
      new PostModel("Lorem ipsum 1", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure officia doloremque vero est")
    ]
  }

  onOpenCreate() {
    this.isCreatedPost = true
  }

  onCreate(post: Post) {
    this.posts = [post, ...this.posts];
    this.isCreatedPost = false
  }

  onUpdate(post: Post) {
    const posts = []; 
    let updatePostIndex = this.posts.findIndex(result => result.id == post.id)
    this.posts[updatePostIndex] = post
    this.posts.forEach(val => posts.push(Object.assign({}, val)));
    this.posts = posts
    this.updatedPost = null
  }

  onEdit(post: Post) {
    this.updatedPost = post
  }

  onDelete(post: Post) {
    this.posts = this.posts.filter(result => result.id != post.id)
  }
}
