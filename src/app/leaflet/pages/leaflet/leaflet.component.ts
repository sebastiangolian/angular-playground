import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.css']
})
export class LeafletComponent implements AfterViewInit {
  private map!: L.Map;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor(private headerService: HeaderService) {
    this.headerService.set('Leaflet');
  }

  ngAfterViewInit(): void {
    this.map = new L.Map(this.mapContainer.nativeElement).setView([51.1789, 22.5229], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([51.1789, 22.5229]).addTo(this.map)
      .bindPopup('Zalew Zemborzycki')
      .openPopup();
  }
}
