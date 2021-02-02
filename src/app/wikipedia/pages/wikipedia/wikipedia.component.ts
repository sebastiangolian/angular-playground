import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { HeaderService } from 'src/app/shared/services/header.service';
import { WikipediaResultOpensearch } from '../../interfaces/wikipedia-result-opensearch.interface';
import { WikipediaResultParse } from '../../interfaces/wikipedia-result-parse.interface';
import { WikipediaService } from '../../services/wikipedia.service';

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css']
})
export class WikipediaComponent implements OnInit, OnDestroy {

  viewSearchResult: boolean = false
  viewWikiResult: boolean = false

  searchResults$: Observable<WikipediaResultOpensearch[]> = new Observable();
  wikiResult!: WikipediaResultParse;

  private searchTerms = new Subject<string>();
  private subscription: Subscription = new Subscription();

  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(private headerService: HeaderService, private wikipediaService: WikipediaService) {
    this.headerService.set('Wikipedia');
  }

  ngOnInit(): void {
    this.searchResults$ = this.searchWiki()
  }

  onSearch(term: string): void {
    this.viewSearchResult = true
    this.viewWikiResult = false
    this.searchTerms.next(term);
  }

  onItemSelected(result: WikipediaResultOpensearch): void {
    this.viewSearchResult = false
    this.viewWikiResult = true
    this.searchInput.nativeElement.value = result.parseTerm
    this.subscription.add(this.parse(result.parseTerm).subscribe(results => this.wikiResult = results));
  }

  onClear(): void {
    this.searchInput.nativeElement.value = ''
    this.viewSearchResult = false
    this.viewWikiResult = false
  }

  private searchWiki(): Observable<WikipediaResultOpensearch[]> {
    return this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => {
        if (term.length > 2) {
          this.viewSearchResult = true
          return this.wikipediaService.opensearch(term, 10);
        } else {
          return of([]);
        }
      })
    );
  }

  private parse(page: string): Observable<WikipediaResultParse> {
    return this.wikipediaService.parse(page).pipe(
      map(result => {
        for (const prop in result.text) {
          result.formatText = result.text[prop];
        }
        return result;
      })
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) { this.subscription.unsubscribe(); }
  }
}
