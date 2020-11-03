import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from 'src/app/shared/services/abstract.service';
import { Hero } from '../interfaces/hero';
import { Observable } from 'rxjs';
import { Api } from 'src/app/shared/interfaces/api.interface';

@Injectable({ providedIn: 'root' })
export class HeroService extends AbstractService<Hero> {

  constructor(protected http: HttpClient) {
    super(http)
    this.url += "/hero"
  }

  getByName(name: string): Observable<Api<Hero[]>> {
    return this.http.get<Api<Hero[]>>(this.url + "/search/" + name);
  }
}
