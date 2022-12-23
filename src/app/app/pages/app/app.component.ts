import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderService } from 'src/app/shared/services/header.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-playground';
  isCollapsed = true;
  $header: Observable<string> = this.headerService.getWithSetTitle();
  version: string = environment.version;
  angularVersion: string = environment.angularVersion.replace('~', '').replace("^","");

  constructor(public headerService: HeaderService) {}

  onReset(): void {
    localStorage.clear();
    window.location.reload();
  }
}
