import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor} from '@angular/common/http';
import { HttpHandler, HttpRequest } from '@angular/common/http'
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.authToken) {
      const authRequest = request.clone({
        headers: request.headers.set('Authorization', this.authService.authToken)
      });
      console.log('Making an authorized request');
      request = authRequest;
    }
    return next.handle(request)
  }
}