import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { HydraPartialCollectionView } from 'src/app/post/interfaces/hydra-partial-collection-view';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})

export class PaginationComponent implements OnChanges {

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
    if(changes.hydraViewCollection){
      this.getPaginationLinks(this.hydraViewCollection);
    }
  }

  public getPaginationLinks(hydraViewCollection: HydraPartialCollectionView) {
    if(hydraViewCollection)
    {
      this.firstPageUrl = hydraViewCollection["hydra:first"];
      this.lastPageUrl = hydraViewCollection["hydra:last"];
      this.prevPageUrl = hydraViewCollection["hydra:previous"];
      this.nextPageUrl = hydraViewCollection["hydra:next"];
  
      if(this.prevPageUrl) {
        this.prevStatus = false;
      } else {
        this.prevStatus = true;
      }
  
      if(this.nextPageUrl) {
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
