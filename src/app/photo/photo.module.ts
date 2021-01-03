import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoComponent } from './pages/photo/photo.component';

@NgModule({
  declarations: [
    PhotoComponent
  ],
  imports: [
    CommonModule,
    PhotoRoutingModule,
    SharedModule
  ]
})
export class PhotoModule { }
