import { Observable, Subscription } from 'rxjs';
import { HeroService } from './../../services/hero.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './hero-heroes.component.html',
  styleUrls: ['./hero-heroes.component.css'],
})
export class HeroHeroesComponent implements OnInit, OnDestroy {
  currentUrl = '';
  heroes$: Observable<Hero[]> = new Observable();
  private subscription: Subscription = new Subscription();
  constructor(private router: Router, private heroService: HeroService) {}

  ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes$ = this.heroService.get().pipe(map((apiList) => apiList.items));
  }

  onHeroCreate(hero: Hero): void {
    this.subscription.add(this.heroCreateSubscription(hero));
  }

  onHeroDelete(hero: Hero): void {
    this.subscription.add(this.heroDeleteSubscription(hero));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private heroCreateSubscription(hero: Hero): Subscription {
    return this.heroService.post(hero).subscribe(() => this.getHeroes());
  }

  private heroDeleteSubscription(hero: Hero): Subscription {
    return this.heroService.delete(hero.id.toString()).subscribe(() => this.getHeroes());
  }
}
