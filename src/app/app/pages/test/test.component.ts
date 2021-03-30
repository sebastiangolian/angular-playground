import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.set('Test');
  }

  test() {

  }

  testtwo() {

  }

  ngOnInit() { }
}
