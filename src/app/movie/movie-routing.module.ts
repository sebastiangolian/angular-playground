import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageMovieListComponent } from './components/page-movie-list/page-movie-list.component';
import { PageMovieProfileComponent } from './components/page-movie-profile/page-movie-profile.component';

const routes: Routes = [
  {
    path: '',
    component: PageMovieListComponent
  },
  {
    path: ':id',
    component: PageMovieProfileComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
