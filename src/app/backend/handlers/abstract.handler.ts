import { DbBackendModel } from './../models/db-backend.model';
import { DbBackend } from './../interfaces/db-backend.interface';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { DbBackendService } from '../services/db-backend.service';

export abstract class AbstractHandler {
  protected db: DbBackend = new DbBackendModel();
  constructor(protected dbBackendService: DbBackendService) {
    this.db = this.dbBackendService.get();
  }

  protected getAll(items: any[], url: string): any {
    const sortBy: string = this.getParamFromUrl(url, 'sort_by');
    const order: string = this.getParamFromUrl(url, 'order');
    const limit: string = this.getParamFromUrl(url, 'limit');
    const page: string = this.getParamFromUrl(url, 'page');
    const filters: string = this.getParamFromUrl(url, 'filters');

    let ret: any[] = items;
    let totalItemFilter: number = items.length;
    if (filters !== undefined) {
      ret = this.setFilter(ret, JSON.parse(filters));
    }

    totalItemFilter = ret.length;

    if (sortBy !== undefined) {
      ret = this.setSort(ret, sortBy, order);
    }

    if (limit !== undefined && page !== undefined) {
      let min = 0;
      if (page !== '0') {
        min = Number(limit) * (Number(page) - 1);
      }

      const max: number = min + Number(limit);
      ret = ret.filter((i: any, index: number) => index >= min && index < max);
    }

    return { total: totalItemFilter, items: ret };
  }

  protected getParamFromUrl(url: string, name: string): string {
    const param = name + '=';
    const urlSplit = url.split(param);

    if (urlSplit.length > 1) {
      return urlSplit[1].split('&')[0];
    } else {
      return '';
    }
  }

  protected getParamFromBody(body: string, name: string): string {
    const param = name + '=';
    const urlSplit = body.split(param);

    if (urlSplit.length > 1) {
      return urlSplit[1].split('&')[0];
    } else {
      return '';
    }
  }

  protected getIdFromUrl(url: string): string {
    return url.substring(url.lastIndexOf('/') + 1);
  }

  protected setSort(data: any[], sort: string, order: string): any[] {
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

  protected setFilter(data: any[], filters: any): any[] {
    if (typeof filters !== 'object') {
      return data;
    }
    const dataFilter = data.filter((item) => {
      const currentValues: boolean[] = [];
      for (const [key, value] of Object.entries(filters)) {
        if (item[key] || item[key] === false) {
          if (typeof value === 'string') {
            const valueString = value.toString().toLowerCase();
            currentValues.push(item[key].toString().toLowerCase().includes(valueString));
          }
        } else {
          currentValues.push(false);
        }
      }
      return !currentValues.includes(false);
    });

    return dataFilter;
  }

  protected response200(request: HttpRequest<any>, responseBody?: any, responseHeaders?: any): Observable<HttpResponse<any>> {
    const response = { status: 200, body: request.body, headers: request.headers };
    if (responseBody) {
      response.body = responseBody;
    }
    if (responseHeaders) {
      response.headers = responseHeaders;
    }
    return of(new HttpResponse<any>(response));
  }

  protected responseError(status: number, message: string): Observable<HttpResponse<any>> {
    return throwError({ status, message });
  }

  protected getPdfBlob(): Blob {
    const pdfData = atob(
      `JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoK
           CjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMg
           MCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAg
           L0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwK
           ICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqICAl
           IHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkg
           VGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAw
           MDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAwMDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJh
           aWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G`,
    );
    const binary = pdfData;
    const array = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      array[i] = binary.charCodeAt(i);
    }

    return new Blob([array], { type: 'application/pdf' });
  }

  protected getPdfUrl(): string {
    return URL.createObjectURL(this.getPdfBlob());
  }
}
