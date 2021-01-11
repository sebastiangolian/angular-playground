import { Component, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalInfoComponent implements OnChanges {
  @Input() isCloseVisible = true;
  @Input() headerClass = '';

  public active = true;

  constructor() {
    this.headerClass = "modal-header " + this.headerClass
  }

  ngOnChanges(): void {
    this.headerClass = "modal-header " + this.headerClass
    this.active = true
  }

  onClose(): void {
    this.active = false
  }
}
