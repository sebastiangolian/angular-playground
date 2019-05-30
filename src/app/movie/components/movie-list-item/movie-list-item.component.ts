import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListItemComponent implements OnInit {
  @Input() movie: Movie
  constructor() { }

  ngOnInit() {
  }

}
