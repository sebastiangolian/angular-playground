import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pages/app/app.component';
import { HttpClientJsonpModule, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BackendInterceptor } from './interceptors/backend.interceptor';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { TestComponent } from './pages/test/test.component';
import { SpinnerModule } from '../spinner/spinner.module';
import { SpinnerInterceptor } from '../spinner/interceptors/spinner.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot(),
    SpinnerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: BackendInterceptor, multi: true }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
