import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { HydraPartialCollectionView } from '../../interfaces/hydra-partial-collection-view';

@Component({
  selector: 'app-hydra-api-pagination',
  templateUrl: './hydra-api-pagination.component.html',
  styleUrls: ['./hydra-api-pagination.component.css']
})
export class HydraApiPaginationComponent implements OnChanges {

  public firstPageUrl: string = "";
  public currentPageUrl: string = "";
  public prevPageUrl: string = "";
  public nextPageUrl: string = "";
  public lastPageUrl: string = "";
  public prevStatus: boolean = true;
  public nextStatus: boolean = false;

  @Input() hydraViewCollection: HydraPartialCollectionView;
  @Output() refresh: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hydraViewCollection) {
      this.getPaginationLinks(this.hydraViewCollection);
    }
  }

  public getPaginationLinks(hydraViewCollection: HydraPartialCollectionView) {
    if (hydraViewCollection) {
      this.firstPageUrl = hydraViewCollection["hydra:first"];
      this.lastPageUrl = hydraViewCollection["hydra:last"];
      this.prevPageUrl = hydraViewCollection["hydra:previous"];
      this.nextPageUrl = hydraViewCollection["hydra:next"];

      if (this.prevPageUrl) {
        this.prevStatus = false;
      } else {
        this.prevStatus = true;
      }

      if (this.nextPageUrl) {
        this.nextStatus = false;
      } else {
        this.nextStatus = true;
      }
    }
  }

  toFirstPage(): void {
    this.currentPageUrl = this.firstPageUrl;
    this.refresh.emit(this.currentPageUrl);
  }

  toPrevPage(): void {
    this.currentPageUrl = this.prevPageUrl;
    this.refresh.emit(this.currentPageUrl);
  }

  toNextPage(): void {
    this.currentPageUrl = this.nextPageUrl;
    this.refresh.emit(this.currentPageUrl);
  }

  toLastPage(): void {
    this.currentPageUrl = this.lastPageUrl;
    this.refresh.emit(this.currentPageUrl);
  }

}
