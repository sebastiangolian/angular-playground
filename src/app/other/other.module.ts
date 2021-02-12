import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherRoutingModule } from './other-routing.module';
import { OtherComponent } from './pages/other/other.component';
import { TimerComponent } from './pages/timer/timer.component';
import { PhotoLazyLoadingComponent } from './pages/photo-lazy-loading/photo-lazy-loading.component';


@NgModule({
  declarations: [
    OtherComponent,
    TimerComponent,
    PhotoLazyLoadingComponent
  ],
  imports: [
    CommonModule,
    OtherRoutingModule,
    SharedModule
  ]
})
export class OtherModule { }
