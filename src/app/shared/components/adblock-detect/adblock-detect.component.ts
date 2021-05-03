import { Component, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'adblock-detect',
  templateUrl: './adblock-detect.component.html',
})
export class AdblockDetectComponent implements AfterViewInit {
  @ViewChild('banner') banner!: ElementRef;
  @Output() detect: EventEmitter<boolean> = new EventEmitter();

  viewContent = false;

  constructor() {
    this.detect = new EventEmitter();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.banner.nativeElement.offsetHeight === 0) {
        this.viewContent = true;
        this.detect.emit(this.banner.nativeElement.offsetHeight === 0);
      }
    });
  }
}
