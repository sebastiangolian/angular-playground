import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleRoutingModule } from './role-routing.module';
import { RoleModalSearchComponent } from './components/role-modal-search/role-modal-search.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RoleModalSearchComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    RoleModalSearchComponent
  ]
})
export class RoleModule { }
