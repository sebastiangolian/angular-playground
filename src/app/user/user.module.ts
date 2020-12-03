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
import { RoleModule } from '../role/role.module';


@NgModule({
  declarations: [
    UserDatatableComponent,
    UserSearchComponent,
    UserItemComponent,
    UserIndexComponent,
    UserModalComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
    RoleModule,
    NgxMaskModule.forRoot(),
  ]
})
export class UserModule { }
