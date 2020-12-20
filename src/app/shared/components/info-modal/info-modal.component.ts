import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoModalComponent implements OnInit {

  @Input() active = true;
  @Input() close = true;

  constructor() {}

  ngOnInit(): void {}

  onClick(modal: ModalDirective): void {
    modal.hide();
  }

}
