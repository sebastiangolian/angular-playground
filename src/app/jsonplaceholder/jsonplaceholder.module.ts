import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonplaceholderRoutingModule } from './jsonplaceholder-routing.module';
import { JphUserComponent } from './pages/jph-user/jph-user.component';
import { JphComponent } from './pages/jph/jph.component';
import { JphUserItemsComponent } from './components/jph-user-items/jph-user-items.component';
import { JphUserAddressComponent } from './components/jph-user-address/jph-user-address.component';
import { JphUserCompanyComponent } from './components/jph-user-company/jph-user-company.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { JphUserFormComponent } from './components/jph-user-form/jph-user-form.component';
import { FormsModule } from '@angular/forms';
import { JphUserModalComponent } from './components/jph-user-modal/jph-user-modal.component';
import { JphPhotoComponent } from './pages/jph-photo/jph-photo.component';


@NgModule({
  declarations: [
    JphUserComponent,
    JphComponent,
    JphUserItemsComponent,
    JphUserAddressComponent,
    JphUserCompanyComponent,
    JphUserFormComponent,
    JphUserModalComponent,
    JphPhotoComponent
  ],
  imports: [
    CommonModule,
    JsonplaceholderRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    SharedModule
  ]
})
export class JsonplaceholderModule { }
