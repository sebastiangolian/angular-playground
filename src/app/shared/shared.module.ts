import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';

@NgModule({
  declarations: [
    SearchComponent,
    PageNotFoundComponent,
    GlobalErrorComponent
  ],
  exports: [
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
