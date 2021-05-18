import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BackendHandler {
  handleRoute: (request: HttpRequest<any>, next: HttpHandler) => Observable<HttpEvent<any>>;
}
