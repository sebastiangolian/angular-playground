import { PhotoExternalService } from '../../../shared/services/photo-external.service';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/shared/services/header.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  url$: Observable<string> = new Observable<string>()

  constructor(private headerService: HeaderService, private photoExternalService: PhotoExternalService) {
    this.headerService.set('Photo');
  }

  ngOnInit(): void {
    const url = 'https://picsum.photos/id/237/200/300'
    this.url$ = this.photoExternalService.getBlobUrl(url)
  }

}
