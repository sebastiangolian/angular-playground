import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { JphUser } from '../../interfaces/jph-user';

@Component({
  selector: 'jph-user-items',
  templateUrl: './jph-user-items.component.html',
  styleUrls: ['./jph-user-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JphUserItemsComponent implements OnInit {
  @Input() users: JphUser[] = [];
  @Output() create: EventEmitter<boolean> = new EventEmitter();
  @Output() update: EventEmitter<JphUser> = new EventEmitter();
  @Output() delete: EventEmitter<JphUser> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
