import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserDatatableComponent } from './pages/user-datatable/user-datatable.component';
import { SharedModule } from '../shared/shared.module';
import { UserModalComponent } from './components/user-modal/user-modal.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { UserSearchComponent } from './pages/user-search/user-search.component';
import { UserIndexComponent } from './pages/user-index/user-index.component';
import { UserItemComponent } from './pages/user-item/user-item.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RoleModalSearchComponent } from './components/role-modal-search/role-modal-search.component';


@NgModule({
  declarations: [
    UserDatatableComponent,
    UserSearchComponent,
    UserItemComponent,
    UserIndexComponent,
    UserModalComponent,
    RoleModalSearchComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    BsDropdownModule.forRoot(),
  ]
})
export class UserModule { }
