import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  @Output() searchValue: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onEnter(value: string): void {
    this.searchValue.emit(value);
  }

}
