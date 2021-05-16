import { Component, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ModalInfoComponent implements OnChanges {
  @Input() isCloseVisible = true;
  @Input() headerClass = '';
  @Input() dateTime = '';
  @Input() timeout = 0;

  active = true;

  constructor() {
    this.headerClass = 'modal-header ' + this.headerClass;
    this.active = true;
  }

  ngOnChanges(): void {
    this.headerClass = 'modal-header ' + this.headerClass;
    this.active = true;
    if (this.timeout > 0) {
      setTimeout(() => {
        this.active = false;
      }, this.timeout);
    }
  }

  onClose(): void {
    this.active = false;
  }
}
