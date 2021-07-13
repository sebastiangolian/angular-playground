import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  templateUrl: './form-reactive-test.component.html',
  styleUrls: ['./form-reactive-test.component.scss'],
})
export class FormReactiveTestComponent implements OnInit {
  constructor(private headerService: HeaderService) {
    this.headerService.set('Form reactive');
  }

  ngOnInit(): void {}
}
