import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { MovieProfileComponent } from './components/movie-profile/movie-profile.component';
import { MoviesProviderService } from './services/movies-provider.service';
import { PageMovieListComponent } from './components/page-movie-list/page-movie-list.component';
import { PageMovieProfileComponent } from './components/page-movie-profile/page-movie-profile.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieListItemComponent,
    MovieProfileComponent,
    PageMovieListComponent,
    PageMovieProfileComponent,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule
  ],
  exports: [
    MovieListComponent
  ],
  providers: [MoviesProviderService],
})
export class MovieModule { }
