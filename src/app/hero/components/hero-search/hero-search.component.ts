import { Component } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent {
  heroes$: Observable<Hero[]|null>
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => {
        if(term.length > 2) {
          return this.heroService.getByName(term).pipe(map(api => api.item))
        } else {
          return of(null)
        }
      })
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
