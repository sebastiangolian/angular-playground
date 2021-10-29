import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HeaderService } from 'src/app/shared/services/header.service';
import { Post } from '../../interfaces/post.interface';
import { PostService } from './../../services/post.service';

@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts$: Observable<Post[]> = new Observable();
  isCreatedPost = false;
  updatedPost: Post | null = null;

  constructor(private headerService: HeaderService, private postService: PostService) {
    this.headerService.set('Posts');
  }

  ngOnInit(): void {
    this.getPosts();
  }

  onOpenCreate(): void {
    this.isCreatedPost = true;
  }

  onCreate(post: Post | null): void {
    if (post) {
      this.postService.post(post).subscribe(() => {
        this.getPosts();
        this.isCreatedPost = false;
      });
    }
  }

  onUpdate(post: Post | null): void {
    if (post) {
      this.postService.update(post.id, post).subscribe(() => {
        this.getPosts();
        this.isCreatedPost = false;
        this.updatedPost = null;
      });
    }
  }

  onEdit(post: Post): void {
    this.updatedPost = post;
  }

  onDelete(post: Post): void {
    this.postService.delete(post.id).subscribe(() => {
      this.getPosts();
      this.isCreatedPost = false;
    });
  }

  private getPosts(): void {
    this.posts$ = this.postService.get().pipe(map((apiList) => apiList.items));
  }
}
