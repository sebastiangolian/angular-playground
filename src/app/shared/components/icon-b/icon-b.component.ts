import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'icon-b',
  templateUrl: './icon-b.component.html',
  styleUrls: ['./icon-b.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBComponent implements OnInit {
  @Input() name = '';
  @Input() width = '22';
  @Input() height = '22';
  @Input() class = 'icon-color';
  @Input() title = '';
  @Output() onclick: EventEmitter<Event> = new EventEmitter();

  href = 'assets/icons/';

  constructor() {}

  ngOnInit(): void {
    this.href = this.href + this.name + '.svg';
  }
}
