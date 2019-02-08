import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchFormComponent } from './../components/search-form/search-form.component';
import { ImageComponent } from './components/image/image.component';
import { FieldErrorComponent } from './components/field-error/field-error.component';

@NgModule({
  declarations: [
    SearchFormComponent,
    ImageComponent,
    FieldErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchFormComponent,
    ImageComponent,
    FieldErrorComponent
  ]
})
export class SharedModule { }
