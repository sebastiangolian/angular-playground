import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  routes: any;
  
  constructor(private router: Router) {
    this.routes = this.router.config;
  }

  ngOnInit() {
  }

}
