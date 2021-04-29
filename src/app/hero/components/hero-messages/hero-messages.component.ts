import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hero-messages',
  templateUrl: './hero-messages.component.html',
  styleUrls: ['./hero-messages.component.css'],
})
export class HeroMessagesComponent {
  @Input() messages: string[] = [];
  @Output() cleared: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  onClearClick(): void {
    this.cleared.emit(true);
  }
}
