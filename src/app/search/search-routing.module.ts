import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageSearchResultsComponent } from './components/page-search-results/page-search-results.component';

const routes: Routes = [
  {
    path: ':query',
    component: PageSearchResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
