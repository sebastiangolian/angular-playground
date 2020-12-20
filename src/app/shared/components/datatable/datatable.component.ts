import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatatableComponent implements OnInit {

  items: any;
  filterError = false;
  total = 0;
  page = 1;

  limitEnabled = true;                            // limit - wyłączenie
  sortEnabled = true;                             // sortowanie - wyłączenie
  filterEnabled = true;                           // filtrowanie - wyłączenie
  limit = 10;                                      // paginacja - ilość rekordów na stronie
  limitValues: number[] = [5, 10, 20];                       // paginacja - wartości
  sortBy = '';                                     // sortowanie - kolumna
  order = 'asc';                                   // sortowanie - kierunek
  filters: any = {};                                       // filtrowanie - objekt z filtrami
  filterMinLength = 3;                             // filtrowanie - minimalna ilość znaków
  filterOneSign: string[] = [];                            // filtrowanie - tablica właściwości do filtrowania po jednym znaku
  onRefresh(): void {}

  ngOnInit(): void {
    this.onRefresh();
  }

  onPrev(): void {
    this.page -= 1;
    this.onRefresh();
  }

  onNext(): void {
    this.page += 1;
    this.onRefresh();
  }

  onSort(column: string): void {
    if (column !== '' && this.sortEnabled) {
      if (this.total > 0) {
        let sortDirection = 'asc';
        if (this.order === 'asc') { sortDirection = 'desc'; }
        this.sortBy = column;
        this.order = sortDirection;
        this.onRefresh();
      }
    }
  }

  getSortClass(column: string): string {
    if (this.sortBy === column) {
      if (this.order === 'asc') { return '&darr;'; }
      if (this.order === 'desc') { return '&uarr;'; }
    }
    return '&darr;';
  }

  getTotalPage(): number {
    if (this.total === 0) {
      return 1;
    }

    return Math.ceil(this.total / this.limit);
  }

  onChangeLimit(target: EventTarget|null): void {
    if (target instanceof HTMLInputElement) { this.limit = Number(target.value); }
    this.page = 1;
    this.onRefresh();
  }

  onFilter(f: NgForm): void {
    const formValues: { [key: string]: any } = {};
    this.filterError = false;
    for (const [key, value] of Object.entries(f.value)) {
      if (typeof value === 'string') {
        if (value.toString().length < this.filterMinLength && !this.filterOneSign.includes(key.toString())) {
          this.filterError = true;
          break;
        }
      }

      if (f.value[key]) { formValues[key] = value; }
    }

    this.filters = formValues;

    if (Object.keys(formValues).length > 0) {
      this.onRefresh();
    } else {
      this.onFilterReset();
    }
  }

  onFilterReset(): void {
    this.filters = {};
    this.onRefresh();
  }
}
