import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WikipediaResultOpenSearch } from '../interfaces/wikipedia-result-opensearch.interface';
import { WikipediaResultParse } from '../interfaces/wikipedia-result-parse.interface';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  url = 'https://en.wikipedia.org/w/api.php';
  constructor(private http: HttpClient) {}

  openSearch(search: string, limit: number = 20): Observable<WikipediaResultOpenSearch[]> {
    const params = new HttpParams()
      .append('action', 'opensearch')
      .append('limit', limit.toString())
      .append('search', encodeURIComponent(search));
    const url = `${this.url}?${params.toString()}`;
    return this.http.jsonp<string[][]>(url, 'callback').pipe(
      map((val) => {
        const result: WikipediaResultOpenSearch[] = [];
        for (let i = 0; i < val[1].length; i++) {
          const term = val[1][i];
          const resultUrl = val[3][i];
          const parseTerm = val[3][i].substring(val[3][i].lastIndexOf('/') + 1);
          result.push({ term, url: resultUrl, parseTerm });
        }

        return result;
      }),
    );
  }

  parse(page: string): Observable<WikipediaResultParse> {
    const params = new HttpParams().append('action', 'parse').append('format', 'json').append('page', decodeURIComponent(page));
    const url = `${this.url}?${params.toString()}`;
    return this.http.jsonp<any>(url, 'callback').pipe(map((result) => result.parse));
  }
}
