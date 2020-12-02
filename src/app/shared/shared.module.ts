import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdblockDetectBannerComponent } from './components/adblock-detect-banner/adblock-detect-banner.component';
import { AdblockDetectComponent } from './components/adblock-detect/adblock-detect.component';
import { DatatableSearchComponent } from './components/datatable/datatable-search.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { IconBComponent } from './components/icon-b/icon-b.component';
import { InfoModalComponent } from './components/info-modal/info-modal.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { InputFocusDirective } from './directives/input-focus.directive';
import { BooleanPipe } from './pipes/boolean.pipe';
import { HtmlPipe } from './pipes/html.pipe';
import { PadPipe } from './pipes/pad.pipe';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    DatatableComponent,
    DatatableSearchComponent,
    MessagesComponent,
    InputFocusDirective,
    BooleanPipe,
    ModalConfirmComponent,
    PadPipe,
    AdblockDetectComponent,
    InfoModalComponent,
    AdblockDetectBannerComponent,
    IconBComponent,
    HtmlPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
  ], 
  exports: [
    DatatableComponent,
    DatatableSearchComponent,
    MessagesComponent,
    InputFocusDirective,
    BooleanPipe,
    PadPipe,
    HtmlPipe,
    AdblockDetectComponent,
    InfoModalComponent,
    AdblockDetectBannerComponent,
    IconBComponent
  ]
})
export class SharedModule { }
