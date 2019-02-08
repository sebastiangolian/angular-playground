import { Component, OnInit } from '@angular/core';
import { MoviesProviderService } from 'src/app/movie/services/movies-provider.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Movies } from 'src/app/movie/interfaces/movies.interface';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-page-search-results',
  templateUrl: './page-search-results.component.html',
  styleUrls: ['./page-search-results.component.css']
})
export class PageSearchResultsComponent implements OnInit {

  movies: Movies = null;
  constructor(
    private moviesProvider: MoviesProviderService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    this.displayResults();
    this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd)
    )
    .subscribe(() => {
      this.displayResults();
    });
  }

  async displayResults() {
    const query = this.route.snapshot.paramMap.get('query');
    this.movies = await this.moviesProvider.search(query);
  }
}
