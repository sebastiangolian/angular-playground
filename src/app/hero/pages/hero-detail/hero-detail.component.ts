import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';
import { Location } from '@angular/common';

@Component({
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  hero: Hero | null = null;
  currentUrl = '';
  private subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private heroService: HeroService, private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.getHero();
    this.currentUrl = this.router.url;
  }

  getHero(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.subscription.add(this.heroGetSubscription(idParam));
    }
  }

  onHeroUpdate(hero: Hero): void {
    this.subscription.add(this.heroUpdateSubscription(hero));
  }

  onBackUpdate(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private heroGetSubscription(id: string): Subscription {
    return this.heroService.getById(id).subscribe((hero) => (this.hero = hero.item));
  }

  private heroUpdateSubscription(hero: Hero): Subscription {
    return this.heroService.update(hero.id.toString(), hero).subscribe(() => this.onBackUpdate());
  }
}
