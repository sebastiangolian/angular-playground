import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoExternalService } from '../../services/photo-external.service';

@Component({
  selector: 'image-lazy-loading',
  templateUrl: './image-lazy-loading.component.html',
  styleUrls: ['./image-lazy-loading.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageLazyLoadingComponent implements OnInit {

  @Input() src: string = ""
  url$: Observable<string> = new Observable<string>()

  constructor(private photoExternalService: PhotoExternalService) { }

  ngOnInit(): void {
    this.url$ = this.photoExternalService.getBlobUrl(this.src)
  }

}
