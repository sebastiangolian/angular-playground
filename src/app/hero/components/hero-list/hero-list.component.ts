import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroListComponent implements OnInit {
  @Input() heroes: Hero[] = [];
  @Output() create: EventEmitter<Hero> = new EventEmitter();
  @Output() delete: EventEmitter<Hero> = new EventEmitter();

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {}

  onCreate(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.create.emit({ name } as Hero);
  }

  onDelete(hero: Hero): void {
    this.delete.emit(hero);
  }
}
