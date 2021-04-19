import { OnDestroy } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MemoryStorageService implements OnDestroy {
  private items: MemoryStorage[] = [];

  constructor() {}

  add(type: string, key: string, value: string): void {
    const memoryStorage: MemoryStorage = new MemoryStorageModel();
    memoryStorage.type = type;
    memoryStorage.key = key;
    memoryStorage.value = value;
    this.items.push(memoryStorage);
  }

  update(type: string, key: string, value: string): boolean {
    const indexItem = this.items.findIndex((item) => item.key === key && item.type === type);
    if (indexItem > -1) {
      this.items[indexItem].value = value;
      return true;
    } else {
      return false;
    }
  }

  delete(type: string, key: string): boolean {
    const storage: MemoryStorage | undefined = this.items.find((item) => item.key === key && item.type === type);
    if (storage) {
      this.items = this.items.filter((item) => item.key !== key && item.type !== type);
      return true;
    } else {
      return false;
    }
  }

  get(type: string, key: string): string {
    const storage: MemoryStorage | undefined = this.items.find((item) => item.key === key && item.type === type);
    if (storage) {
      return storage.value;
    } else {
      return '';
    }
  }

  getAll(): string[] {
    let ret: string[] = [];
    ret = this.items.map((item) => item.value);
    return ret;
  }

  deleteAll(): void {
    this.items = [];
  }

  ngOnDestroy(): void {
    this.deleteAll();
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
