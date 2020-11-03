import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiList } from 'src/app/shared/interfaces/api-list.interface';
import { Api } from 'src/app/shared/interfaces/api.interface';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service'; 

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

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
