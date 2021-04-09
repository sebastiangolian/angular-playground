import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackendHandler } from '../interfaces/handler.interface';
import { AbstractHandler } from './abstract.handler';

export class CarHandler extends AbstractHandler implements BackendHandler {
  handleRoute(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    if (method === 'GET' && url.includes('mock/car/list')) {
      const mainBody = this.getAll(this.db.cars, url);
      return this.response200(request, mainBody);
    }

    if (method === 'GET' && url.includes('mock/car/')) {
      const findCar = this.db.cars.find((car) => car.id.toString() === this.getIdFromUrl(url));
      return this.response200(request, { item: findCar });
    }

    if (method === 'POST' && url.includes('mock/car')) {
      this.db.cars.push(body);
      this.dbBackendService.set(this.db);
      return this.response200(request, { item: body });
    }

    if (method === 'PUT' && url.includes('mock/car')) {
      const index = this.db.cars.findIndex((car) => car.id.toString() === this.getIdFromUrl(url));
      body.id = this.db.cars[index].id;
      this.db.cars[index] = body;
      this.dbBackendService.set(this.db);
      return this.response200(request, { item: body });
    }

    if (method === 'DELETE' && url.includes('mock/car')) {
      this.db.cars = this.db.cars.filter((car) => car.id.toString() !== this.getIdFromUrl(url));
      this.dbBackendService.set(this.db);
      return this.response200(request);
    }

    return next.handle(request);
  }
}
