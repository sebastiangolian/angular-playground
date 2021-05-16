import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss'],
})
export class UserIndexComponent implements OnInit {
  constructor(private headerService: HeaderService) {
    this.headerService.set('Users');
  }

  ngOnInit(): void {}
}
