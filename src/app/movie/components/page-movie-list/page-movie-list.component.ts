import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-page-movie-list',
  templateUrl: './page-movie-list.component.html',
  styleUrls: ['./page-movie-list.component.css']
})
export class PageMovieListComponent implements OnInit {

  public dataset$: Observable<Movie[]>
  
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.dataset$ = this.movieService.get()
  }

}
