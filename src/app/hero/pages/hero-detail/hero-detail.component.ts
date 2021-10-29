import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';

@Component({
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;
  currentUrl = '';

  constructor(private route: ActivatedRoute, private heroService: HeroService, private router: Router, private location: Location) {}

  ngOnInit(): void {
    this.getHero();
    this.currentUrl = this.router.url;
  }

  getHero(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.heroService.getById(idParam).subscribe((hero) => (this.hero = hero.item));
    }
  }

  onHeroUpdate(hero: Hero): void {
    this.heroService.update(hero.id.toString(), hero).subscribe(() => this.onBackUpdate());
  }

  onBackUpdate(): void {
    this.location.back();
  }
}
