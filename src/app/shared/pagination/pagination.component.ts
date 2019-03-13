import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

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

  @Input() response: string = "";
  @Output() refresh: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.response){
      this.getPaginationLinks(this.response);
    }
  }

  public getPaginationLinks(response: any) {
    if(response)
    {
      this.firstPageUrl = response["hydra:view"]["hydra:first"];
      this.lastPageUrl = response["hydra:view"]["hydra:last"];
      this.prevPageUrl = response["hydra:view"]["hydra:previous"];
      this.nextPageUrl = response["hydra:view"]["hydra:next"];
  
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
