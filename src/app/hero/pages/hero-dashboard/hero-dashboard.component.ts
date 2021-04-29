import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../interfaces/hero.interface';
import { map } from 'rxjs/operators';
import { HeroMessageService } from '../../services/hero-message.service';

@Component({
  templateUrl: './hero-dashboard.component.html',
  styleUrls: ['./hero-dashboard.component.css'],
})
export class HeroDashboardComponent implements OnInit {
  topHeroes$: Observable<Hero[]> = new Observable();
  heroMessages: string[] = [];
  constructor(private heroService: HeroService, private heroMessageService: HeroMessageService) {}

  ngOnInit(): void {
    this.getTopHeroes();
    this.getHeroMessages();
  }

  onMessageClear(): void {
    this.heroMessageService.clear();
  }

  private getTopHeroes(): void {
    this.topHeroes$ = this.heroService.get(4, 0).pipe(map((apiList) => apiList.items));
  }

  private getHeroMessages(): void {
    this.heroMessages = this.heroMessageService.get();
  }
}
