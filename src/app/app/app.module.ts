import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { FormsModule }   from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MovieModule } from '../movie/movie.module';
import { GlobalErrorHandlerService } from '../shared/services/global-error-handler.service';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageTestComponent } from './components/page-test/page-test.component';
import { PageFormComponent } from './components/page-form/page-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageTestComponent,
    PageFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    MovieModule,
    FormsModule
  ],
  providers: [
    GlobalErrorHandlerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }    
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
