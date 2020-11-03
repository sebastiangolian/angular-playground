import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  templateUrl: './hero-dashboard.component.html',
  styleUrls: [ './hero-dashboard.component.css' ]
})
export class HeroDashboardComponent implements OnInit {
  constructor(private headerService: HeaderService) { 
    this.headerService.set("Dashboard")
  }

  ngOnInit() {}
}
