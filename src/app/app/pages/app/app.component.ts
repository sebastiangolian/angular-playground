import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderService } from 'src/app/shared/services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-playground';
  $header: Observable<string>  = this.headerService.getWithSetTitle();

  constructor(public headerService: HeaderService) {}

  onReset() {
    localStorage.clear();
    window.location.reload();
  }
}
