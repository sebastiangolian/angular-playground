import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractService } from 'src/app/shared/services/abstract.service';
import { Hero } from '../interfaces/hero';

@Injectable({providedIn: 'root'})
export class HeroService extends AbstractService<Hero> {

  constructor(protected http: HttpClient) { 
    super(http) 
    this.url += "/hero"
  }
}
