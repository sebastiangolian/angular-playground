import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostUpdateComponent } from './components/post-update/post-update.component';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent
  },
  {
    path: 'create',
    component: PostCreateComponent
  },
  {
    path: 'update/:id',
    component: PostUpdateComponent
  },
  {
    path: ':id',
    component: PostDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
