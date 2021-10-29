import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiList } from '../interfaces/api-list.interface';
import { Api } from '../interfaces/api.interface';

export abstract class AbstractService<T> {
  url: string = environment.apiEndpoint;

  constructor(protected http: HttpClient) {}

  get(limit?: number, page?: number, sort?: string, order?: string, filters?: string): Observable<ApiList<T>> {
    let url = this.url + '/list';
    const parameters: string[] = [];

    if (sort !== undefined) {
      parameters.push(`sort_by=${sort}&order=${order}`);
    }

    if (limit !== undefined && page !== undefined) {
      if (limit > 0 && page >= 0) {
        parameters.push('limit=' + limit + '&page=' + page);
      }
    }
    if (filters !== undefined) {
      if (Object.keys(filters).length > 0) {
        parameters.push('filters=' + JSON.stringify(filters));
      }
    }

    if (parameters.length > 0) {
      url += '?' + parameters.join('&');
    }
    return this.http.get<ApiList<T>>(url).pipe(first());
  }

  getOne(): Observable<Api<T>> {
    return this.http.get<Api<T>>(this.url).pipe(first());
  }

  getById(id: string): Observable<Api<T>> {
    return this.http.get<Api<T>>(this.url + '/' + id).pipe(first());
  }

  post(item: T): Observable<T> {
    item = this.trimItem(item);
    return this.http.post<T>(this.url, item).pipe(first());
  }

  update(id: string, item: T): Observable<T> {
    item = this.trimItem(item);
    return this.http.put<T>(this.url + '/' + id, item).pipe(first());
  }

  patch(id: string, item: any): Observable<T> {
    item = this.trimItem(item);
    return this.http.patch<T>(this.url + '/' + id, item).pipe(first());
  }

  delete(id: string): Observable<null> {
    return this.http.delete<null>(this.url + '/' + id).pipe(first());
  }

  private trimItem(item: any): T {
    for (const key in item) {
      if (typeof item[key] === 'string') {
        item[key] = item[key].trim();
      }
    }
    return item;
  }
}
