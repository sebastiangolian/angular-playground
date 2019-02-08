import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { PageSearchResultsComponent } from './components/page-search-results/page-search-results.component';
import { MovieModule } from '../movie/movie.module';

@NgModule({
  declarations: [PageSearchResultsComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MovieModule
  ]
})
export class SearchModule { }
