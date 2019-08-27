import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageTestComponent } from './components/page-test/page-test.component';
import { PageFormComponent } from './components/page-form/page-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { MovieModule } from './movie/movie.module';
import { FormsModule } from '@angular/forms';
import { GlobalErrorHandlerService } from './shared/services/global-error-handler.service';

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
