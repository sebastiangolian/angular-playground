import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { HeroMessagesComponent } from './components/hero-messages/hero-messages.component';
import { HeroDashboardComponent } from './pages/hero-dashboard/hero-dashboard.component';
import { HeroHeroesComponent } from './pages/hero-heroes/hero-heroes.component';
import { HeroMenuComponent } from './components/hero-menu/hero-menu.component';
import { HeroTopHeroesComponent } from './components/hero-top-heroes/hero-top-heroes.component';
import { HeroUpdateComponent } from './components/hero-update/hero-update.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';

@NgModule({
  declarations: [
    HeroMessagesComponent,
    HeroDashboardComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroHeroesComponent,
    HeroMenuComponent,
    HeroTopHeroesComponent,
    HeroUpdateComponent,
    HeroListComponent,
  ],
  imports: [CommonModule, HeroRoutingModule, FormsModule],
})
export class HeroModule {}
