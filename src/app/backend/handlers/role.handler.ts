import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackendHandler } from '../interfaces/handler.interface';
import { AbstractHandler } from './abstract.handler';

export class RoleHandler extends AbstractHandler implements BackendHandler {
  handleRoute(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    if (method === 'GET' && url.includes('mock/role/list')) {
      const mainBody = this.getAll(this.db.roles, url);
      return this.response200(request, mainBody);
    }

    return next.handle(request);
  }
}
