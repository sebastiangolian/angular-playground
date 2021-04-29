import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';

@Component({
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | null = null;
  currentUrl = '';

  constructor(private route: ActivatedRoute, private heroService: HeroService, private router: Router) {}

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
}
