import { PostService } from './../../services/post.service';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';
import { Post } from '../../interfaces/post.interface';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts$: Observable<Post[]> = new Observable();
  isCreatedPost = false;
  updatedPost: Post | null = null;

  private subscription: Subscription = new Subscription();
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
      this.subscription.add(this.createSubscription(post));
    }
  }

  onUpdate(post: Post | null): void {
    if (post) {
      this.subscription.add(this.updateSubscription(post));
    }
  }

  onEdit(post: Post): void {
    this.updatedPost = post;
  }

  onDelete(post: Post): void {
    this.subscription.add(this.deleteSubscription(post));
  }

  private createSubscription(post: Post): Subscription {
    return this.postService.post(post).subscribe(() => {
      this.getPosts();
      this.isCreatedPost = false;
    });
  }

  private updateSubscription(post: Post): Subscription {
    return this.postService.update(post.id, post).subscribe(() => {
      this.getPosts();
      this.isCreatedPost = false;
      this.updatedPost = null;
    });
  }

  private deleteSubscription(post: Post): Subscription {
    return this.postService.delete(post.id).subscribe(() => {
      this.getPosts();
      this.isCreatedPost = false;
    });
  }

  private getPosts(): void {
    this.posts$ = this.postService.get().pipe(map((apiList) => apiList.items));
  }
}
