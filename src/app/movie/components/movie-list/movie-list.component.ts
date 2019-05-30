import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListComponent implements OnInit {
  @Input() movies: Movie[]
  constructor() { }

  ngOnInit() {
  }

}
