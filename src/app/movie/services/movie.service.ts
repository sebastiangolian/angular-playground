import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';
import { Observable, from } from 'rxjs';
import { MOVIES } from '../data/movie.data';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private currentData: Movie[]

  constructor() { 
    this.currentData = MOVIES
  }

  get(): Observable<Movie[]> {
    return from([this.currentData]); 
  }

  getOne(id: number): Observable<Movie> {
    let movie: Movie = this.currentData.find((movie:Movie) => {return movie.id == id})
    return from([movie]); 
  }
}
