import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'hero-top-heroes',
  templateUrl: './hero-top-heroes.component.html',
  styleUrls: ['./hero-top-heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroTopHeroesComponent implements OnInit {
  @Input() heroes: Hero[] = [];
  constructor() {}

  ngOnInit(): void {}
}
