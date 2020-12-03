import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';

@Component({
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero|null = null;

  constructor(private route: ActivatedRoute, private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const idParam = this.route.snapshot.paramMap.get('id')
    if(idParam){
      this.heroService.getById(idParam).subscribe(hero => this.hero = hero.item);
    }
  }
}
