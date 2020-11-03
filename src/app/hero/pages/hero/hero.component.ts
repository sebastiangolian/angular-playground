import { Component, OnInit } from '@angular/core';
import { ApiList } from 'src/app/shared/interfaces/api-list.interface';
import { Api } from 'src/app/shared/interfaces/api.interface';
import { HeaderService } from 'src/app/shared/services/header.service';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService, private headerService: HeaderService) {
    this.headerService.set('Heroes')
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.get().subscribe((heroes: ApiList<Hero>) => this.heroes = heroes.items);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create({ name } as Hero).subscribe((hero: Api<Hero>) => {
      this.heroes.push(hero.item);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.delete(hero.id.toString()).subscribe();
  }

}
