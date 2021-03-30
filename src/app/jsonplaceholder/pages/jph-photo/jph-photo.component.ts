import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { JphPhotoService } from '../../services/jph-photo.service';
import { JphPhoto } from '../../interfaces/jph-photo';

@Component({
  templateUrl: './jph-photo.component.html',
  styleUrls: ['./jph-photo.component.css']
})
export class JphPhotoComponent implements OnInit {

  photos$: Observable<JphPhoto[]> = new Observable();
  constructor(private jphPhotoService: JphPhotoService) { }

  ngOnInit(): void {
    this.photos$ = this.jphPhotoService.get(500, 0);
  }

}
