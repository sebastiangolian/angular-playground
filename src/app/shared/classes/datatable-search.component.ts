import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataTableComponent } from './datatable.component';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableSearchComponent<T> extends DataTableComponent<T> {
  limitEnabled = false;

  onSort(column: string): void {
    if (Object.keys(this.filters).length === 0) {
      return;
    }
    super.onSort(column);
  }

  onFilterReset(): void {
    this.filters = {};
    this.items = [];
  }
}
