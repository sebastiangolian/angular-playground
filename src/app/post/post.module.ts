import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostComponent } from './pages/post/post.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { FormsModule } from '@angular/forms';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { PostUpdateComponent } from './components/post-update/post-update.component';
import { PostListComponent } from './components/post-list/post-list.component';

@NgModule({
  declarations: [PostItemComponent, PostComponent, PostFormComponent, PostCreateComponent, PostUpdateComponent, PostListComponent],
  imports: [CommonModule, PostRoutingModule, FormsModule],
})
export class PostModule {}
