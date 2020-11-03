import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroComponent } from './pages/hero/hero.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  declarations: [
    MessagesComponent,
    DashboardComponent,
    HeroComponent,
    HeroDetailComponent,
    HeroSearchComponent,
  ],
  imports: [
    CommonModule,
    HeroRoutingModule,
    FormsModule
  ]
})
export class HeroModule { }
