import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { WikipediaResultOpensearch } from '../interfaces/wikipedia-result-opensearch.interface';
import { WikipediaResultParse } from '../interfaces/wikipedia-result-parse.interface';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  url: string = "https://en.wikipedia.org/w/api.php";
  constructor(private http: HttpClient) { }

  opensearch(search: string, limit: number = 20): Observable<WikipediaResultOpensearch[]> {
    let params = new HttpParams()
    .append('action', 'opensearch')
    .append('limit', limit.toString())
    .append('search', encodeURIComponent(search))
    let url = `${this.url}?${params.toString()}`
    return this.http.jsonp<string[][]>(url, 'callback').pipe(
      map(val => {
        let result:WikipediaResultOpensearch[] = []
        for (let i = 0; i < val[1].length; i++) {
          let term = val[1][i]
          let url = val[3][i]
          let parseTerm = val[3][i].substring(val[3][i].lastIndexOf('/') + 1)
          result.push({term, url, parseTerm})
        }

        return result
      })
    )
  }

  parse(page: string): Observable<WikipediaResultParse> {
    let params = new HttpParams()
    .append('action', 'parse')
    .append('format', 'json')
    .append('page', decodeURIComponent(page))
    let url = `${this.url}?${params.toString()}`
    return this.http.jsonp<any>(url, 'callback').pipe(
      map(result => result.parse)
    )
  }
}
