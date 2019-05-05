import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  routes: any;
  
  constructor(private router: Router) {
    this.routes = this.router.config;
  }

  ngOnInit() {
  }
}
