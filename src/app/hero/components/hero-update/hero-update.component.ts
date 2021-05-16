import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'hero-update',
  templateUrl: './hero-update.component.html',
  styleUrls: ['./hero-update.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroUpdateComponent implements OnInit {
  @Input() hero: Hero | null = null;
  @Output() back: EventEmitter<boolean> = new EventEmitter();
  @Output() update: EventEmitter<Hero> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  goBack(): void {
    this.back.emit(true);
  }

  save(): void {
    if (this.hero) {
      this.update.emit(this.hero);
    }
  }
}
