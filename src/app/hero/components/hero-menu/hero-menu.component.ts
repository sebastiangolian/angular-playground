import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'hero-menu',
  templateUrl: './hero-menu.component.html',
  styleUrls: ['./hero-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroMenuComponent implements OnInit {
  @Input() currentUrl = '';
  constructor() {}

  ngOnInit(): void {}
}
