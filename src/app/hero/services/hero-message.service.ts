import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HeroMessageService {
  messages: string[] = [];

  add(message: string): void {
    this.messages.unshift(message);
    if (this.messages.length > 15) {
      this.messages.pop();
    }
  }

  clear(): void {
    this.messages = [];
  }
}
