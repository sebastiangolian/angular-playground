import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hero-menu',
  templateUrl: './hero-menu.component.html',
  styleUrls: ['./hero-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroMenuComponent implements OnInit {

  url = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.url = this.router.url;
  }

}
