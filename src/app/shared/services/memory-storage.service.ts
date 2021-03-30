import { OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MemoryStorageService implements OnDestroy {
  items: MemoryStorage[] = [];

  constructor() {}

  add(type: string, key: string, value: string): void {
    const memoryStorage: MemoryStorage = new MemoryStorageModel();
    memoryStorage.type = type;
    memoryStorage.key = key;
    memoryStorage.value = value;
    this.items.push(memoryStorage);
  }

  get(type: string, key: string): string {
    const storage: MemoryStorage | undefined = this.items.find((item) => item.key === key && item.type === type);
    if (storage) {
      return storage.value;
    } else {
      return '';
    }
  }

  ngOnDestroy(): void {
    this.items = [];
  }
}

export interface MemoryStorage {
  type: string;
  key: string;
  value: string;
}

export class MemoryStorageModel implements MemoryStorage {
  type = '';
  key = '';
  value = '';
}
