import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  templateUrl: './photo-lazy-loading.component.html',
  styleUrls: ['./photo-lazy-loading.component.css']
})
export class PhotoLazyLoadingComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.set('Photo');
  }

  ngOnInit(): void { }

  onVisibleChange(isVisible: boolean): void {
    console.info(isVisible);
  }

}
