import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Location } from '@angular/common';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'hero-update',
  templateUrl: './hero-update.component.html',
  styleUrls: ['./hero-update.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroUpdateComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private heroService: HeroService, private location: Location) { }

  ngOnInit(): void {}

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero.id.toString(), this.hero)
      .subscribe(() => this.goBack());
  }
}
