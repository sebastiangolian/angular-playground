import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackendHandler } from '../interfaces/handler.interface';
import { AbstractHandler } from './abstract.handler';

export class PostHandler extends AbstractHandler implements BackendHandler {
  handleRoute(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    if (method === 'GET' && url.includes('mock/post/list')) {
      const mainBody = this.getAll(this.db.posts, url);
      return this.response200(request, mainBody);
    }

    if (method === 'GET' && url.includes('mock/post/')) {
      const find = this.db.posts.find((post) => post.id.toString() === this.getIdFromUrl(url));
      return this.response200(request, { item: find });
    }

    if (method === 'POST' && url.includes('mock/post')) {
      this.db.posts.push(body);
      this.dbBackendService.set(this.db);
      return this.response200(request, { item: body });
    }

    if (method === 'PUT' && url.includes('mock/post')) {
      const index = this.db.posts.findIndex((post) => post.id.toString() === this.getIdFromUrl(url));
      body.id = this.db.posts[index].id;
      this.db.posts[index] = body;
      this.dbBackendService.set(this.db);
      return this.response200(request, { item: body });
    }

    if (method === 'DELETE' && url.includes('mock/post')) {
      this.db.posts = this.db.posts.filter((post) => post.id.toString() !== this.getIdFromUrl(url));
      this.dbBackendService.set(this.db);
      return this.response200(request);
    }

    return next.handle(request);
  }
}
