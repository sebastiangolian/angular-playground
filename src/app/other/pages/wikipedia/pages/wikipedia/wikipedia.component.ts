import { WikipediaService } from './../../services/wikipedia.service';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { HeaderService } from 'src/app/shared/services/header.service';
import { WikipediaResultOpenSearch } from '../../interfaces/wikipedia-result-opensearch.interface';
import { WikipediaResultParse } from '../../interfaces/wikipedia-result-parse.interface';

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.scss'],
})
export class WikipediaComponent implements OnInit, OnDestroy {
  @ViewChild('searchInput') searchInput!: ElementRef;
  viewSearchResult = false;
  viewWikiResult = false;

  searchResults$: Observable<WikipediaResultOpenSearch[]> = new Observable();
  wikiResult!: WikipediaResultParse;

  private searchTerms = new Subject<string>();
  private subscription: Subscription = new Subscription();

  constructor(private headerService: HeaderService, private wikipediaService: WikipediaService) {
    this.headerService.set('Wikipedia');
  }

  ngOnInit(): void {
    this.searchResults$ = this.searchWiki();
  }

  onSearch(term: string): void {
    this.viewSearchResult = true;
    this.viewWikiResult = false;
    this.searchTerms.next(term);
  }

  onItemSelected(result: WikipediaResultOpenSearch): void {
    this.viewSearchResult = false;
    this.viewWikiResult = true;
    this.searchInput.nativeElement.value = result.parseTerm;
    this.subscription.add(this.onItemSelectedSubscription(result.parseTerm));
  }

  onItemSelectedSubscription(parseTerm: string): Subscription {
    return this.parse(parseTerm).subscribe((results) => (this.wikiResult = results));
  }

  onClear(): void {
    this.searchInput.nativeElement.value = '';
    this.viewSearchResult = false;
    this.viewWikiResult = false;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private searchWiki(): Observable<WikipediaResultOpenSearch[]> {
    return this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => {
        this.viewWikiResult = false;
        if (term.length > 2) {
          this.viewSearchResult = true;
          return this.wikipediaService.openSearch(term, 10);
        } else {
          return of([]);
        }
      }),
    );
  }

  private parse(page: string): Observable<WikipediaResultParse> {
    return this.wikipediaService.parse(page).pipe(
      map((result) => {
        for (const prop in result.text) {
          if (prop) {
            result.formatText = result.text[prop];
          }
        }
        return result;
      }),
    );
  }
}
