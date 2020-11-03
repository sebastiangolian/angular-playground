import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from 'src/app/shared/services/abstract.service';
import { Hero } from '../interfaces/hero';
import { Observable } from 'rxjs';
import { Api } from 'src/app/shared/interfaces/api.interface';
import { HeroMessageService } from './hero-message.service';
import { ApiList } from 'src/app/shared/interfaces/api-list.interface';

@Injectable({ providedIn: 'root' })
export class HeroService extends AbstractService<Hero> {

  constructor(protected http: HttpClient, private heroMessageService: HeroMessageService) {
    super(http)
    this.url += "/hero"
  }

  get(limit?: number, page?: number, sort?: string, order?: string, filters?: string): Observable<ApiList<Hero>> {
    this.heroMessageService.add("HeroService.getAll")
    return super.get(limit, page, sort, order, filters)
  }

  getOne(): Observable<Api<Hero>> {
    this.heroMessageService.add("HeroService.getOne")
    return super.getOne()
  }

  getById(id: string): Observable<Api<Hero>> {
    this.heroMessageService.add("HeroService.getById: " + id)
    return super.getById(id)
  }

  getByName(name: string): Observable<Api<Hero[]>> {
    this.heroMessageService.add("HeroService.getByName: " + name)
    return this.http.get<Api<Hero[]>>(this.url + "/search/" + name);
  }

  create(item: Hero): Observable<any> {
    this.heroMessageService.add("HeroService.create: " + item.name)
    return super.create(item)
  }

  update(id: string, item: Hero): Observable<any> {
    this.heroMessageService.add("HeroService.update: " + id)
    return super.update(id, item)
  }

  patch(id: string, item: Hero): Observable<any> {
    this.heroMessageService.add("HeroService.patch: " + id)
    return super.patch(id, item)
  }

  delete(id: string): Observable<any> {
    this.heroMessageService.add("HeroService.delete: " + id)
    return super.delete(id)
  }
}
