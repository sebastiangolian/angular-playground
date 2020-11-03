import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDashboardComponent } from './pages/hero-dashboard/hero-dashboard.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { HeroHeroesComponent } from './pages/hero-heroes/hero-heroes.component';

const routes: Routes = [
  { path: 'dashboard', component: HeroDashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: '', component: HeroHeroesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
