import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private headerService: HeaderService) { 
    this.headerService.set("Dashboard")
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.get().subscribe(heroes => this.heroes = heroes.items.slice(1, 5));
  }
}
