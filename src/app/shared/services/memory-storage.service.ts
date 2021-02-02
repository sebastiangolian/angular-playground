import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemoryStorageService {
  items: MemoryStorage[] = []

  constructor() { }

  add(type: string, key: string, value: string): void {
    let memoryStorage: MemoryStorage = new MemoryStorageModel()
    memoryStorage.type = type
    memoryStorage.key = key
    memoryStorage.value = value
    this.items.push(memoryStorage)
  }

  get(type: string, key: string): string {
    const item: MemoryStorage | undefined = this.items.find(item => item.key === key && item.type === type)
    if (item)
      return item.value
    else
      return ''
  }
}

export interface MemoryStorage {
  type: string
  key: string
  value: string
}

export class MemoryStorageModel implements MemoryStorage {
  type: string = ''
  key: string = ''
  value: string = ''
}

