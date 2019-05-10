import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  routes: any;

  constructor(public messageService: MessageService, private router: Router) {
    this.routes = this.router.config;
    this.messageService.message = "Welcome in app-root component."
  }

  ngOnInit() {
  }

}
