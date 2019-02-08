import { Component, OnInit } from '@angular/core';
import { MoviesProviderService } from 'src/app/movie/services/movies-provider.service';
import { Movies } from 'src/app/movie/interfaces/movies.interface';
import { Movie } from '../../interfaces/movie.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-movie-profile',
  templateUrl: './page-movie-profile.component.html',
  styleUrls: ['./page-movie-profile.component.css']
})
export class PageMovieProfileComponent implements OnInit {

  public movie: Movie = null;

  constructor(
    private route: ActivatedRoute,
    private moviesProvider: MoviesProviderService
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const movie = await this.moviesProvider.fetchMovieById(id);
    this.movie = movie;
  }
}
