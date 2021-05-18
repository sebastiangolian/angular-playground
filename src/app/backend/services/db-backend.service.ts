import { DbBackend } from './../interfaces/db-backend.interface';
import { Injectable } from '@angular/core';
import { DbBackendStorageService } from './db-backend-storage.service';

@Injectable({
  providedIn: 'root',
})
export class DbBackendService {
  constructor(private dbBackendStorageService: DbBackendStorageService) {}

  set(db: DbBackend): void {
    return this.dbBackendStorageService.saveStorage(db);
  }

  get(): DbBackend {
    return this.dbBackendStorageService.loadStorage();
  }
}
