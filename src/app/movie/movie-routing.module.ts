import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageMovieListComponent } from './components/page-movie-list/page-movie-list.component';
import { PageMovieItemComponent } from './components/page-movie-item/page-movie-item.component';

const routes: Routes = [
  { path: '', component: PageMovieListComponent},
  { path: ':id', component: PageMovieItemComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
