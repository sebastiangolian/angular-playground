import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { PageMovieListComponent } from './components/page-movie-list/page-movie-list.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { PageMovieItemComponent } from './components/page-movie-item/page-movie-item.component';

@NgModule({
  declarations: [
    PageMovieListComponent,
    MovieListItemComponent,
    MovieListComponent,
    MovieItemComponent,
    PageMovieItemComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  exports: [
    PageMovieListComponent,
    PageMovieItemComponent
  ]
})
export class MovieModule { }
