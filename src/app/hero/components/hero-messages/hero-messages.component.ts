import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hero-messages',
  templateUrl: './hero-messages.component.html',
  styleUrls: ['./hero-messages.component.css'],
})
export class HeroMessagesComponent {
  @Input() messages: string[] = [];
  @Output() clear: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  onClearClick(): void {
    this.clear.emit(true);
  }
}
