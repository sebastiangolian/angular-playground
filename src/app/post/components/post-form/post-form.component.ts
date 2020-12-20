import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostFormComponent implements OnInit {

  @Input() model: Post|null = null;
  @Input() action = 'Add';
  @Output() postSubmited: EventEmitter<Post|null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    this.postSubmited.emit(this.model);
  }

}
