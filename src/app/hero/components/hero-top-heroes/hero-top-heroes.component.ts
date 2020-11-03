import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'hero-top-heroes',
  templateUrl: './hero-top-heroes.component.html',
  styleUrls: ['./hero-top-heroes.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HeroTopHeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.get().subscribe(heroes => this.heroes = heroes.items.slice(1, 5));
  }
}
