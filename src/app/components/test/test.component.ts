import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

  title = 'My heroes';
  heroes = ['Rambo', 'Terminator', 'Rocky', 'Superman'];
  defaultHero = this.heroes[0];

  constructor(public messageService: MessageService) {
    this.messageService.message = "Welcome in app-test component."
  }

  ngOnInit() {
    
  }

}
