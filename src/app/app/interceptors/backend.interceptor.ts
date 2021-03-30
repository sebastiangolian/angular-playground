import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, materialize, delay, dematerialize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/user/interfaces/user.interface';
import { Hero } from 'src/app/hero/interfaces/hero.interface';
import { Role } from 'src/app/user/interfaces/role.interface';
import { Car } from 'src/app/car/interfaces/car.interface';
import { DateTimeHelper } from 'src/app/shared/helpers/date-time.helper';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    return of(null).pipe(mergeMap(handleRoute)).pipe(materialize()).pipe(delay(environment.backendDelay)).pipe(dematerialize());

    function handleRoute(): Observable<any> {
      const httpClient: HttpClient = new HttpClient(next);

      if (environment.loggingBackendUrl) {
        console.info('[' + request.method + ']' + url);
      }
      if (environment.loggingBackendRequestHeaders) {
        console.info(headers);
      }
      if (environment.loggingBackendRequest) {
        console.info(body);
      }

      let db: DbBackend = {
        user: [
          // {
          //     id: '1', email: 'jan.kowalski@example.pl', zipCode: '11-111', created: '2020-04-01 12:02:28',
          //     active: false, documentLink: getPdfUrl(), idRole: '1'
          // },
          // {
          //     id: '2', email: 'anna.nowak@example.pl', zipCode: '22-222', created: '2020-04-01 13:02:28',
          //     active: false, documentLink: getPdfUrl(), idRole: '1'
          // },
          // {
          //     id: '3', email: 'henryk.kuczynski@example.pl', zipCode: '33-333', created: '2020-04-01 14:02:28',
          //     active: false, documentLink: getPdfUrl(), idRole: '1'
          // },
          // {
          //     id: '4', email: 'zdzislaw.kowalski@example.pl', zipCode: '44-444', created: '2020-04-01 15:02:28',
          //     active: false, documentLink: getPdfUrl(), idRole: '1'
          // },
          // {
          //     id: '5', email: 'cezary.kowal@example.pl', zipCode: '55-555', created: '2020-04-01 16:02:28',
          //     active: false, documentLink: getPdfUrl(), idRole: '1'
          // },
          // {
          //     id: '6', email: 'jerzy.tusk@example.pl', zipCode: '66-666', created: '2020-04-02 12:02:28',
          //     active: false, documentLink: getPdfUrl(), idRole: '1'
          // },
          // {
          //     id: '7', email: 'wojciech.walewski@example.pl', zipCode: '77-777', created: '2020-04-02 13:02:28',
          //     active: false, documentLink: getPdfUrl(), idRole: '1'
          // },
          // {
          //     id: '8', email: 'andrzej.nowaczek@example.pl', zipCode: '88-888', created: '2020-04-02 14:02:28',
          //     active: false, documentLink: getPdfUrl(), idRole: '1'
          // },
          // {
          //     id: '9', email: 'krystian.kowalewski@example.pl', zipCode: '99-999', created: '2020-04-02 15:02:28',
          //     active: false, documentLink: getPdfUrl(), idRole: '1'
          // },
          // {
          //     id: '10', email: 'michal.adamczuk@example.pl', zipCode: '00-111', created: '2020-04-02 16:02:28',
          //     active: false, documentLink: getPdfUrl(), idRole: '1'
          // },
          // {
          //     id: '11', email: 'adam.adamowicz@example.pl', zipCode: '00-222', created: '2020-04-02 17:02:28',
          //     active: false, documentLink: getPdfUrl(), idRole: '1'
          // },
        ],
        role: [
          { id: '1', name: 'admin' },
          { id: '2', name: 'editor' },
          { id: '3', name: 'standard' },
        ],
        car: [
          { id: '1', name: 'leon', brand: 'seat' },
          { id: '2', name: 'golf', brand: 'volkswagen' },
          { id: '3', name: 'A3', brand: 'audi' },
        ],
        hero: [
          { id: '1', name: 'Rocky' },
          { id: '2', name: 'Terminator' },
          { id: '3', name: 'Rambo' },
          { id: '4', name: 'Superman' },
          { id: '5', name: 'Batman' },
          { id: '6', name: 'Spiderman' },
          { id: '7', name: 'Superwoman' },
          { id: '8', name: 'Hulk' },
          { id: '9', name: 'Ironman' },
          { id: '10', name: 'Antman' },
        ],
      };

      db = loadStorage(db);

      if (db.user.length === 0) {
        db.user = [];
        for (let i = 1; i <= 100; i++) {
          db.user.push({
            id: i.toString(),
            email: 'example' + i + '@o2.pl',
            zipCode: '11-111',
            created: DateTimeHelper.currentDateTime(),
            active: true,
            documentLink: getPdfUrl(),
            idRole: '1',
          });
        }
      }
      switch (true) {
        case method === 'GET' && url.includes('mock/user/list'): {
          return response200(getAll(db.user));
        }

        case method === 'GET' && url.includes('mock/user/'): {
          const findUser = db.user.find((user) => user.id.toString() === getIdFromUrl());
          return response200({ item: findUser });
        }

        case method === 'POST' && url.includes('mock/user'): {
          body.id = db.user.length + 1;
          body.documentLink = getPdfUrl();
          body.created = new Date().toJSON().slice(0, 10) + ' ' + new Date().toLocaleTimeString();
          db.user.push(body);
          saveStorage(db);
          return response200({ item: body });
        }

        case method === 'PUT' && url.includes('mock/user'): {
          const index = db.user.findIndex((user) => user.id.toString() === getIdFromUrl());
          body.id = db.user[index].id;
          db.user[index] = body;
          saveStorage(db);
          return response200({ item: body });
        }

        case method === 'DELETE' && url.includes('mock/user'): {
          db.user = db.user.filter((user) => user.id.toString() !== getIdFromUrl());
          saveStorage(db);
          return response200();
        }

        case method === 'PATCH' && url.includes('mock/user'): {
          const index = db.user.findIndex((user) => user.id.toString() === getIdFromUrl());
          db.user[index].idRole = body.idRole;
          saveStorage(db);
          return response200({ item: body });
        }

        case method === 'GET' && url.includes('mock/role/list'): {
          return response200(getAll(db.role));
        }

        case method === 'GET' && url.includes('mock/car/list'): {
          return response200(getAll(db.car));
        }

        case method === 'GET' && url.includes('mock/car'): {
          const findCar = db.car.find((car) => car.id.toString() === getIdFromUrl());
          return response200({ item: findCar });
        }

        case method === 'POST' && url.includes('mock/car'): {
          db.car.push(body);
          saveStorage(db);
          return response200({ item: body });
        }

        case method === 'PUT' && url.includes('mock/car'): {
          const index = db.car.findIndex((car) => car.id.toString() === getIdFromUrl());
          body.id = db.car[index].id;
          db.car[index] = body;
          saveStorage(db);
          return response200({ item: body });
        }

        case method === 'DELETE' && url.includes('mock/car'): {
          db.car = db.car.filter((car) => car.id.toString() !== getIdFromUrl());
          saveStorage(db);
          return response200();
        }

        case method === 'GET' && url.includes('mock/hero/list'): {
          return response200(getAll(db.hero));
        }

        case method === 'GET' && url.includes('mock/hero/search/'): {
          const items = db.hero.filter((hero) => hero.name.toLowerCase().includes(getIdFromUrl().toLowerCase()));
          return response200(getAll(items));
        }

        case method === 'GET' && url.includes('mock/hero/'): {
          const item = db.hero.find((hero) => hero.id.toString() === getIdFromUrl());
          return response200({ item });
        }

        case method === 'POST' && url.includes('mock/hero'): {
          body.id = db.hero.length + 1;
          db.hero.push(body);
          saveStorage(db);
          return response200({ item: body });
        }

        case method === 'PUT' && url.includes('mock/hero'): {
          const index = db.hero.findIndex((hero) => hero.id.toString() === getIdFromUrl());
          body.id = db.hero[index].id;
          db.hero[index] = body;
          saveStorage(db);
          return response200({ item: body });
        }

        case method === 'DELETE' && url.includes('mock/hero'): {
          db.hero = db.hero.filter((hero) => hero.id.toString() !== getIdFromUrl());
          saveStorage(db);
          return response200();
        }
      }

      return next.handle(request);
    }

    function loadStorage(db: any): DbBackend {
      const localStorageDb = localStorage.getItem('angular-playground');

      if (localStorageDb !== null) {
        return JSON.parse(localStorageDb);
      } else {
        localStorage.setItem('angular-playground', JSON.stringify(db));
        return db;
      }
    }

    function saveStorage(db: DbBackend): void {
      localStorage.setItem('angular-playground', JSON.stringify(db));
    }

    function getAll(items: any[]): any {
      const sortBy: string = getParamFromUrl('sort_by');
      const order: string = getParamFromUrl('order');
      const limit: string = getParamFromUrl('limit');
      const page: string = getParamFromUrl('page');
      const filters: string = getParamFromUrl('filters');
      let ret: any[] = items;
      let totalItemFilter: number = items.length;
      if (filters) {
        ret = setFilter(ret, JSON.parse(filters));
      }

      totalItemFilter = ret.length;

      if (sortBy) {
        ret = setSort(ret, sortBy, order);
      }

      if (limit && page) {
        const min: number = Number(limit) * (Number(page) - 1);
        const max: number = min + Number(limit);
        ret = ret.filter((i: any, index: number) => index >= min && index < max);
      }

      return { total: totalItemFilter, items: ret };
    }

    function response200(responseBody?: any, responseHeaders?: any): Observable<HttpResponse<any>> {
      const response = { status: 200, body, headers };
      if (responseBody) {
        response.body = responseBody;
      }
      if (responseHeaders) {
        response.headers = responseHeaders;
      }
      if (environment.loggingBackendResponse) {
        console.info(response);
      }
      return of(new HttpResponse<any>(response));
    }

    function responseError(status: number, message: string): Observable<HttpResponse<any>> {
      return throwError({ status, message });
    }

    function getIdFromUrl(): string {
      return url.substring(url.lastIndexOf('/') + 1);
    }

    function getParamFromUrl(name: string): string {
      const param = name + '=';
      const urlSplit = url.split(param);

      if (urlSplit.length > 1) {
        return urlSplit[1].split('&')[0];
      } else {
        return '';
      }
    }

    function getParamFromBody(name: string): string {
      const param = name + '=';
      const urlSplit = body.split(param);

      if (urlSplit.length > 1) {
        return urlSplit[1].split('&')[0];
      } else {
        return '';
      }
    }

    function setSort(data: any[], sort: string, order: string): any[] {
      if (sort === '' || order === '') {
        return data;
      }

      return data.sort((a, b) => {
        let propertyA: number | string = '';
        let propertyB: number | string = '';

        [propertyA, propertyB] = [a[sort], b[sort]];

        const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
        const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

        return (valueA < valueB ? -1 : 1) * (order === 'asc' ? 1 : -1);
      });
    }

    function setFilter(data: any[], filters: object): any[] {
      if (typeof filters !== 'object') {
        return data;
      }
      const dataFilter = data.filter((item) => {
        const currentValues: boolean[] = [];
        for (const [key, value] of Object.entries(filters)) {
          if (item[key] || item[key] === false) {
            const valueString = value.toString().toLowerCase();
            currentValues.push(item[key].toString().toLowerCase().includes(valueString));
          } else {
            currentValues.push(false);
          }
        }
        return !currentValues.includes(false);
      });

      return dataFilter;
    }

    function getPdfUrl(): string {
      const pdfData = atob(
        `JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAv
                TWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAg
                L1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9u
                dAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJU
                CjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4g
                CjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAwMDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9v
                dCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G`,
      );
      const binary = pdfData;
      const array = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) {
        array[i] = binary.charCodeAt(i);
      }

      const blob = new Blob([array], { type: 'application/pdf' });
      return URL.createObjectURL(blob);
    }
  }
}

export interface DbBackend {
  user: User[];
  hero: Hero[];
  role: Role[];
  car: Car[];
}
