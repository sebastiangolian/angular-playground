/* eslint-disable max-len */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { OtherRoutingModule } from './other-routing.module';
import { FormDynamicServicesComponent } from './pages/form-reactive-dynamic-validators/form-dynamic-services/form-dynamic-services.component';
import { FormReactiveDynamicValidatorsComponent } from './pages/form-reactive-dynamic-validators/form-reactive-dynamic-validators.component';
import { FormReactiveTestComponent } from './pages/form-reactive-test/form-reactive-test.component';
import { FormUserComponent } from './pages/form-reactive-test/form-user/form-user.component';
import { FormUserAddressComponent } from './pages/form-reactive-test/form-user/groups/form-user-address/form-user-address.component';
import { FormUserAliasesComponent } from './pages/form-reactive-test/form-user/groups/form-user-aliases/form-user-aliases.component';
import { FormUserServicesComponent } from './pages/form-reactive-test/form-user/groups/form-user-services/form-user-services.component';
import { LeafletComponent } from './pages/leaflet/leaflet.component';
import { OtherComponent } from './pages/other/other.component';
import { PhotoLazyLoadingComponent } from './pages/photo-lazy-loading/photo-lazy-loading.component';
import { TimerComponent } from './pages/timer/timer.component';
import { WikipediaItemComponent } from './pages/wikipedia/components/wikipedia-item/wikipedia-item.component';
import { WikipediaParseItemComponent } from './pages/wikipedia/components/wikipedia-parse-item/wikipedia-parse-item.component';
import { WikipediaComponent } from './pages/wikipedia/pages/wikipedia/wikipedia.component';

@NgModule({
  declarations: [
    OtherComponent,
    TimerComponent,
    PhotoLazyLoadingComponent,
    LeafletComponent,
    WikipediaComponent,
    WikipediaItemComponent,
    WikipediaParseItemComponent,
    FormReactiveTestComponent,
    FormUserAddressComponent,
    FormUserAliasesComponent,
    FormUserComponent,
    FormUserServicesComponent,
    FormReactiveDynamicValidatorsComponent,
    FormDynamicServicesComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OtherRoutingModule, SharedModule],
})
export class OtherModule {}
