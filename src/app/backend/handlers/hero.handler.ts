import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackendHandler } from '../interfaces/handler.interface';
import { AbstractHandler } from './abstract.handler';

export class HeroHandler extends AbstractHandler implements BackendHandler {
  handleRoute(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    if (method === 'GET' && url.includes('mock/hero/list')) {
      const mainBody = this.getAll(this.db.heros, url);
      return this.response200(request, mainBody);
    }

    if (method === 'GET' && url.includes('mock/hero/search/')) {
      console.log(url);
      const items = this.db.heros.filter((hero) => hero.name.toLowerCase().includes(this.getIdFromUrl(url).toLowerCase()));
      const mainBody = this.getAll(items, url);
      return this.response200(request, mainBody);
    }

    if (method === 'GET' && url.includes('mock/hero/')) {
      const find = this.db.heros.find((hero) => hero.id.toString() === this.getIdFromUrl(url));
      return this.response200(request, { item: find });
    }

    if (method === 'POST' && url.includes('mock/hero')) {
      this.db.heros.push(body);
      this.dbBackendService.set(this.db);
      return this.response200(request, { item: body });
    }

    if (method === 'PUT' && url.includes('mock/hero')) {
      const index = this.db.heros.findIndex((hero) => hero.id.toString() === this.getIdFromUrl(url));
      body.id = this.db.heros[index].id;
      this.db.heros[index] = body;
      this.dbBackendService.set(this.db);
      return this.response200(request, { item: body });
    }

    if (method === 'DELETE' && url.includes('mock/hero')) {
      this.db.heros = this.db.heros.filter((hero) => hero.id.toString() !== this.getIdFromUrl(url));
      this.dbBackendService.set(this.db);
      return this.response200(request);
    }

    return next.handle(request);
  }
}
