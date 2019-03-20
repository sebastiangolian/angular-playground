import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HydraApiPaginationComponent } from './components/hydra-api-pagination/hydra-api-pagination.component';

@NgModule({
  declarations: [
    HydraApiPaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HydraApiPaginationComponent
  ]
})
export class HydraApiModule { }
