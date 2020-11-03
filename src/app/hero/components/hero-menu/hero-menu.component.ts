import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'hero-menu',
  templateUrl: './hero-menu.component.html',
  styleUrls: ['./hero-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
