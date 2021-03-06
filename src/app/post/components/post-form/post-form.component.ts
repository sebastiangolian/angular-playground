import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostFormComponent {
  @Input() model: Post | null = null;
  @Input() action = 'Add';
  @Output() postSubmit: EventEmitter<Post | null> = new EventEmitter();

  constructor() {}

  onSubmit(f: NgForm): void {
    this.postSubmit.emit(this.model);
  }
}
