import { HttpClient } from '@angular/common/http';
import { ApiList } from '../interfaces/api-list.interface';
import { Observable } from 'rxjs/internal/Observable';
import { Api } from '../interfaces/api.interface';
import { environment } from 'src/environments/environment';

export abstract class AbstractService<T> {
    url: string = environment.apiEndpoint;

    constructor(protected http: HttpClient) { }

    get(limit?: number, page?: number, sort?: string, order?: string, filters?: string): Observable<ApiList<T>> {
        let url = this.url + '/list';
        const parameters: string[] = [];

        if (sort) { parameters.push(`sort_by=${sort}&order=${order}`); }
        if (limit && page) {
            if (limit > 0 && page >= 0) { parameters.push('limit=' + limit + '&page=' + page); }
        }
        if (filters) {
            if (Object.keys(filters).length > 0) { parameters.push('filters=' + JSON.stringify(filters)); }
        }

        if (parameters.length > 0) { url += '?' + parameters.join('&'); }
        return this.http.get<ApiList<T>>(url);
    }

    getOne(): Observable<Api<T>> {
        return this.http.get<Api<T>>(this.url);
    }

    getById(id: string): Observable<Api<T>> {
        return this.http.get<Api<T>>(this.url + '/' + id);
    }

    post(item: T): Observable<T> {
        item = this._trimItem(item);
        return this.http.post<T>(this.url, item);
    }

    update(id: string, item: T): Observable<T> {
        item = this._trimItem(item);
        return this.http.put<T>(this.url + '/' + id, item);
    }

    patch(id: string, item: any): Observable<T> {
        item = this._trimItem(item);
        return this.http.patch<T>(this.url + '/' + id, item);
    }

    delete(id: string): Observable<null> {
        return this.http.delete<null>(this.url + '/' + id);
    }

    private _trimItem(item: any) {
        for (const key in item) {
            if (typeof item[key] == 'string') { item[key] = item[key].trim(); }
        }
        return item;
    }
}
