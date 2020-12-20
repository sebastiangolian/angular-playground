import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { WikipediaResultParse } from '../../interfaces/wikipedia-result-parse.interface';

@Component({
  selector: 'wikipedia-parse-item',
  templateUrl: './wikipedia-parse-item.component.html',
  styleUrls: ['./wikipedia-parse-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WikipediaParseItemComponent implements OnInit {

  @Input() item: WikipediaResultParse|null = null
  constructor() { }

  ngOnInit(): void {
  }

}
