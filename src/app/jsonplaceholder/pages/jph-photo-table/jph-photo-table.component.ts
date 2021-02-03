import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JphPhoto } from '../../interfaces/jph-photo';
import { JphPhotoService } from '../../services/jph-photo.service';

@Component({
  templateUrl: './jph-photo-table.component.html',
  styleUrls: ['./jph-photo-table.component.css']
})
export class JphPhotoTableComponent implements OnInit {

  photos$: Observable<JphPhoto[]> = new Observable()
  constructor(private jphPhotoService: JphPhotoService) { }

  ngOnInit(): void {
    this.photos$ = this.jphPhotoService.get(1000, 0)
  }

}
