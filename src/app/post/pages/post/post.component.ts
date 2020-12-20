import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';
import { Post } from '../../interfaces/post.interface';
import { PostModel } from '../../models/post.model';

@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[] = [];
  isCreatedPost = false;
  updatedPost: Post|null = null;

  constructor(private headerService: HeaderService) {
    this.headerService.set('Posts');
  }

  ngOnInit(): void {
    this.posts = [
      new PostModel('Lorem ipsum 3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure officia doloremque vero est'),
      new PostModel('Lorem ipsum 2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure officia doloremque vero est'),
      new PostModel('Lorem ipsum 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iure officia doloremque vero est')
    ];
  }

  onOpenCreate(): void {
    this.isCreatedPost = true;
  }

  onCreate(post: Post|null): void {
    if (post) {
      this.posts = [post, ...this.posts];
      this.isCreatedPost = false;
    }
  }

  onUpdate(post: Post|null): void {
    if (post) {
      const posts: Post[] = [];
      const updatePostIndex = this.posts.findIndex(result => result.id === post.id);
      this.posts[updatePostIndex] = post;
      this.posts.forEach(val => posts.push(Object.assign({}, val)));
      this.posts = posts;
      this.updatedPost = null;
    }
  }

  onEdit(post: Post): void {
    this.updatedPost = post;
  }

  onDelete(post: Post): void {
    this.posts = this.posts.filter(result => result.id !== post.id);
  }
}
