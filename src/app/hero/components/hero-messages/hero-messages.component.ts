import { Component, OnInit } from '@angular/core';
import { HeroMessageService } from '../../services/hero-message.service';

@Component({
  selector: 'hero-messages',
  templateUrl: './hero-messages.component.html',
  styleUrls: ['./hero-messages.component.css']
})
export class HeroMessagesComponent implements OnInit {

  constructor(public heroMessageService: HeroMessageService) {}

  ngOnInit() {
  }

}
