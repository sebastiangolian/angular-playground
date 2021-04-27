import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  @Output() clicked: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.clicked.emit(true);
  }
}
