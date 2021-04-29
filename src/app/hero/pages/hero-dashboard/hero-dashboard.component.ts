import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../interfaces/hero.interface';
import { map } from 'rxjs/operators';

@Component({
  templateUrl: './hero-dashboard.component.html',
  styleUrls: ['./hero-dashboard.component.css'],
})
export class HeroDashboardComponent implements OnInit {
  topHeroes$: Observable<Hero[]> = new Observable();
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getTopHeroes();
  }

  getTopHeroes(): void {
    this.topHeroes$ = this.heroService.get(4, 0).pipe(map((apiList) => apiList.items));
  }
}
