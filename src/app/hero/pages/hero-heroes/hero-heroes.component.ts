import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from './../../services/hero.service';

@Component({
  templateUrl: './hero-heroes.component.html',
  styleUrls: ['./hero-heroes.component.scss'],
})
export class HeroHeroesComponent implements OnInit {
  currentUrl = '';
  heroes$: Observable<Hero[]> = new Observable();

  constructor(private router: Router, private heroService: HeroService) {}

  ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.getHeroes();
  }

  onHeroCreate(hero: Hero): void {
    this.heroService.post(hero).subscribe(() => this.getHeroes());
  }

  onHeroDelete(hero: Hero): void {
    this.heroService.delete(hero.id.toString()).subscribe(() => this.getHeroes());
  }

  private getHeroes(): void {
    this.heroes$ = this.heroService.get().pipe(map((apiList) => apiList.items));
  }
}
