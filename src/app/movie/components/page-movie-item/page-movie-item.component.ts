import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../interfaces/movie.interface';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-page-movie-item',
  templateUrl: './page-movie-item.component.html',
  styleUrls: ['./page-movie-item.component.css']
})
export class PageMovieItemComponent implements OnInit {

  public movie$: Observable<Movie>
  
  constructor(private route: ActivatedRoute, private moviesService: MovieService) { 
      const id = this.route.snapshot.paramMap.get('id');
      this.movie$ = this.moviesService.getOne(Number(id))
  }

  ngOnInit() {
  }

}
