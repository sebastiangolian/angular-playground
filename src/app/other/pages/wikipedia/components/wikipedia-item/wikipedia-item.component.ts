import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { WikipediaResultOpensearch } from '../../interfaces/wikipedia-result-opensearch.interface';

@Component({
  selector: 'wikipedia-item',
  templateUrl: './wikipedia-item.component.html',
  styleUrls: ['./wikipedia-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WikipediaItemComponent implements OnInit {

  @Input() result!: WikipediaResultOpensearch;
  @Output() itemSelected: EventEmitter<WikipediaResultOpensearch> = new EventEmitter<WikipediaResultOpensearch>();
  active = false;

  constructor() { }

  ngOnInit(): void { }

  onClick(): void {
    this.itemSelected.emit(this.result);
  }
}
