import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { SharedModule } from '../shared/shared.module';
import { RoleModalSearchComponent } from './components/role-modal-search/role-modal-search.component';
import { UserModalComponent } from './components/user-modal/user-modal.component';
import { UserDataTableComponent } from './pages/user-datatable/user-datatable.component';
import { UserIndexComponent } from './pages/user-index/user-index.component';
import { UserItemComponent } from './pages/user-item/user-item.component';
import { UserSearchComponent } from './pages/user-search/user-search.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserDataTableComponent,
    UserSearchComponent,
    UserItemComponent,
    UserIndexComponent,
    UserModalComponent,
    RoleModalSearchComponent,
  ],
  imports: [
    CommonModule, 
    UserRoutingModule, 
    SharedModule, 
    FormsModule, 
    NgxMaskDirective, 
    NgxMaskPipe,
    BsDropdownModule.forRoot()
  ],
})
export class UserModule {}
