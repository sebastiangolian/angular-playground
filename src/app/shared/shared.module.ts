import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageErrorComponent } from './components/page-error/page-error.component';

@NgModule({
  declarations: [
    SearchComponent,
    PageNotFoundComponent,
    PageErrorComponent
  ],
  exports: [
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
