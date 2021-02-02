import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatatableComponent<T> implements OnInit {

  items: T[] = [];
  filterError: boolean = false;
  total: number = 0;
  page: number = 1;

  limitEnabled: boolean = true;                       // limit - wyłączenie
  sortEnabled: boolean = true;                        // sortowanie - wyłączenie
  filterEnabled: boolean = true;                      // filtrowanie - wyłączenie
  limit: number = 10;                                 // paginacja - ilość rekordów na stronie
  limitValues: number[] = [5, 10, 20];                // paginacja - wartości
  sortBy: string = '';                                // sortowanie - kolumna
  order: string = 'asc';                              // sortowanie - kierunek
  filters: any = {};                                  // filtrowanie - obiekt z filtrami
  filterMinLength: number = 3;                        // filtrowanie - minimalna ilość znaków
  filterOneSign: string[] = [];                       // filtrowanie - tablica właściwości do filtrowania po jednym znaku

  onRefresh(): void { }

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

  onChangeLimit(limit: string): void {
    this.limit = Number(limit);
    this.page = 1;
    this.onRefresh();
  }

  onFilter(f: NgForm): void {
    const formValues: { [key: string]: any } = {};
    this.filterError = false;
    for (const [key, value] of Object.entries(f.value)) {
      if (typeof value === 'string') {
        const checkMinLength = value.toString().length < this.filterMinLength;
        const checkOneSign = !this.filterOneSign.includes(key.toString())
        const checkValue = value != ""
        if (checkMinLength && checkOneSign && checkValue) {
          this.filterError = true;
        }
      }

      if (f.value[key]) { formValues[key] = value; }
    }

    if (!this.filterError) {
      this.filters = formValues;

      if (Object.keys(formValues).length > 0) {
        this.onRefresh();
      } else {
        this.onFilterReset();
      }
    }

  }

  onFilterReset(): void {
    this.filters = {};
    this.filterError = false;
    this.onRefresh();
  }
}
