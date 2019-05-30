import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestComponent } from './components/test/test.component';
import { SharedModule } from '../shared/shared.module';
import { MovieModule } from '../movie/movie.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    MovieModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
