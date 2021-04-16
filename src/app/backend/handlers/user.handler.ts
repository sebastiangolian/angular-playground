import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackendHandler } from '../interfaces/handler.interface';
import { AbstractHandler } from './abstract.handler';

export class UserHandler extends AbstractHandler implements BackendHandler {
  handleRoute(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    if (method === 'GET' && url.includes('mock/user/list')) {
      const mainBody = this.getAll(this.db.users, url);
      return this.response200(request, mainBody);
    }

    if (method === 'GET' && url.includes('mock/user') && url.includes('/document')) {
      return this.response200(request, this.getPdfBlob());
    }

    if (method === 'GET' && url.includes('mock/user/')) {
      const findUser = this.db.users.find((user) => user.id.toString() === this.getIdFromUrl(url));
      return this.response200(request, { item: findUser });
    }

    if (method === 'POST' && url.includes('mock/user')) {
      body.id = this.db.users.length + 1;
      body.documentLink = '';
      body.created = new Date().toJSON().slice(0, 10) + ' ' + new Date().toLocaleTimeString();
      this.db.users.push(body);
      this.dbBackendService.set(this.db);
      return this.response200(request, { item: body });
    }

    if (method === 'PUT' && url.includes('mock/user')) {
      const index = this.db.users.findIndex((user) => user.id.toString() === this.getIdFromUrl(url));
      body.id = this.db.users[index].id;
      this.db.users[index] = body;
      this.dbBackendService.set(this.db);
      return this.response200(request, { item: body });
    }

    if (method === 'PATCH' && url.includes('mock/user')) {
      const index = this.db.users.findIndex((user) => user.id.toString() === this.getIdFromUrl(url));
      this.db.users[index].idRole = body.idRole;
      this.dbBackendService.set(this.db);
      return this.response200(request, { item: body });
    }

    if (method === 'DELETE' && url.includes('mock/user')) {
      this.db.users = this.db.users.filter((user) => user.id.toString() !== this.getIdFromUrl(url));
      this.dbBackendService.set(this.db);
      return this.response200(request);
    }

    return next.handle(request);
  }
}
