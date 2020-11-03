import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import { Api } from 'src/app/shared/interfaces/api.interface';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Api<Hero[]>>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => {
        if(term.length > 2) {
          return this.heroService.getByName(term)
        } else {
          return of(null)
        }
      }),
    );
  }
}
