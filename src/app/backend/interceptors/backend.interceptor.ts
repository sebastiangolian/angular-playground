import { logging } from 'protractor';
import { DbBackendService } from './../services/db-backend.service';
import { UserHandler } from './../handlers/user.handler';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { materialize, delay, dematerialize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RoleHandler } from '../handlers/role.handler';
import { CarHandler } from '../handlers/car.handler';
import { HeroHandler } from '../handlers/hero.handler';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
  constructor(private dbBackendService: DbBackendService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.handleRoute(request, next).pipe(materialize(), delay(environment.backendDelay), dematerialize());
  }

  handleRoute(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('user')) {
      const userHandler = new UserHandler(this.dbBackendService);
      return userHandler.handleRoute(request, next);
    }

    if (request.url.includes('role')) {
      const roleHandler = new RoleHandler(this.dbBackendService);
      return roleHandler.handleRoute(request, next);
    }

    if (request.url.includes('car')) {
      const carHandler = new CarHandler(this.dbBackendService);
      return carHandler.handleRoute(request, next);
    }

    if (request.url.includes('hero')) {
      const heroHandler = new HeroHandler(this.dbBackendService);
      return heroHandler.handleRoute(request, next);
    }
    return next.handle(request);
  }
}
