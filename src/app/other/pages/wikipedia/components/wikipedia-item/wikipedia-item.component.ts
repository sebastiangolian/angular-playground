import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { WikipediaResultOpenSearch } from '../../interfaces/wikipedia-result-opensearch.interface';

@Component({
  selector: 'wikipedia-item',
  templateUrl: './wikipedia-item.component.html',
  styleUrls: ['./wikipedia-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WikipediaItemComponent implements OnInit {

  @Input() result!: WikipediaResultOpenSearch;
  @Output() itemSelected: EventEmitter<WikipediaResultOpenSearch> = new EventEmitter<WikipediaResultOpenSearch>();
  active = false;

  constructor() { }

  ngOnInit(): void { }

  onClick(): void {
    this.itemSelected.emit(this.result);
  }
}
