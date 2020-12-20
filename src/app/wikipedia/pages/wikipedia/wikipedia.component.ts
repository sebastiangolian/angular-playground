import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
import { debounceTime, map, switchMap, tap } from 'rxjs/operators';
import { HeaderService } from 'src/app/shared/services/header.service';
import { WikipediaResultOpensearch } from '../../interfaces/wikipedia-result-opensearch.interface';
import { WikipediaResultParse } from '../../interfaces/wikipedia-result-parse.interface';
import { WikipediaService } from '../../services/wikipedia.service';

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css']
})
export class WikipediaComponent implements OnInit, AfterViewInit, OnDestroy {

  result: FormSearch = new FormSearch()
  results!: WikipediaResultOpensearch[] | null
  parseItem!: WikipediaResultParse | null

  private _subscription: Subscription = new Subscription();

  @ViewChild('f') f!: NgForm
  constructor(private headerService: HeaderService, private wikipediaService: WikipediaService) {
    this.headerService.set("Wikipedia")
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this._subscription.add(this.search().subscribe(results => this.results = results))
  }

  search(): Observable<WikipediaResultOpensearch[] | null> {
    return this.f.form.valueChanges.pipe(
      debounceTime(500),
      switchMap((result: FormSearch) => {
        if (!result.search) return of(null)
        if (result.search.length <= 2) {
          this.parseItem = null
          return of(null)
        }
        return this.wikipediaService.opensearch(result.search, 10)
      })
    )
  }

  parse(page: string): Observable<WikipediaResultParse> {
    return this.wikipediaService.parse(page).pipe(
      map(result => {
        for (var prop in result.text) {
          result.formatText = result.text[prop]
          break;
        }
        return result
      })
    )
  }

  onItemSelected(result: WikipediaResultOpensearch | null) {
    if (result) {
      this.results = []
      this.result.search = result.term
      this._subscription.add(this.parse(result.parseTerm).subscribe(results => this.parseItem = results))
    }
  }

  ngOnDestroy() {
    if (this._subscription) this._subscription.unsubscribe()
  }
}

export class FormSearch {
  search: string = ""
}
