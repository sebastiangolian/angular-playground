import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';

@NgModule({
  declarations: [
    PostListComponent,
    PostItemComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  exports: [
    PostListComponent
  ]
})
export class PostModule { }
