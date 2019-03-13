import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { SharedModule } from '../shared/shared.module';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostListComponent,
    PostItemComponent,
    PostCreateComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PostListComponent
  ]
})
export class PostModule { }
