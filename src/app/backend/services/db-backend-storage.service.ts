import { DbBackendModel } from './../models/db-backend.model';
import { Injectable } from '@angular/core';
import { DbBackend } from '../interfaces/db-backend.interface';

@Injectable({
  providedIn: 'root',
})
export class DbBackendStorageService {
  constructor() {}

  loadStorage(): DbBackend {
    const localStorageDb = localStorage.getItem('angular-playground');

    if (localStorageDb !== null) {
      return JSON.parse(localStorageDb);
    } else {
      const db = new DbBackendModel();
      localStorage.setItem('angular-playground', JSON.stringify(db));
      return db;
    }
  }

  saveStorage(db: DbBackend): void {
    localStorage.setItem('angular-playground', JSON.stringify(db));
  }
}
