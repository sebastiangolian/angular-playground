import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';
import { HeroService } from '../../services/hero.service';

@Component({
  templateUrl: './hero-heroes.component.html',
  styleUrls: ['./hero-heroes.component.css']
})
export class HeroHeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private headerService: HeaderService) {
    this.headerService.set('Heroes')
  }

  ngOnInit() {}
}
