import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IntersectionStatus } from '../enums/intersection-status.enum';

@Directive({
  selector: '[intersectionObserver]',
})
export class IntersectionObserverDirective implements OnInit {
  @Input() intersectionDebounce = 0;
  @Input() intersectionRootMargin = '0px';
  @Input() intersectionRoot!: HTMLElement;
  @Input() intersectionThreshold!: number | number[];
  @Output() visibilityChange = new EventEmitter<IntersectionStatus>();

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.visibilityChange.emit(IntersectionStatus.notVisible);

    const config = {
      root: this.intersectionRoot,
      rootMargin: this.intersectionRootMargin,
      threshold: this.intersectionThreshold,
    };

    const intersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.visibilityChange.emit(IntersectionStatus.visible);
          observer.disconnect();
        }
      });
    };

    const intersectionObserver = new IntersectionObserver(intersectionObserverCallback, config);
    intersectionObserver.observe(this.element.nativeElement);
  }
}
