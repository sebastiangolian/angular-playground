import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './hero-heroes.component.html',
  styleUrls: ['./hero-heroes.component.css'],
})
export class HeroHeroesComponent implements OnInit {
  currentUrl = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentUrl = this.router.url;
  }
}
