import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalInfoComponent implements OnInit {

  @Input() active = true;
  @Input() close = true;

  constructor() { }

  ngOnInit(): void { }

  onClick(modal: ModalDirective): void {
    modal.hide();
  }

}
