import { Component, OnInit, ChangeDetectionStrategy, Input, TemplateRef, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'lazy-loading-item',
  templateUrl: './lazy-loading-item.component.html',
  styleUrls: ['./lazy-loading-item.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class LazyLoadingItemComponent implements OnInit, OnDestroy {
  @Input() initialTemplate!: TemplateRef<any>;
  @Input() doneTemplate!: TemplateRef<any>;
  @Input() saveInMemory = true;
  currentTemplate!: TemplateRef<any>;
  intersectionObserver!: IntersectionObserver;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.currentTemplate = this.initialTemplate;
    const intersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.currentTemplate = this.doneTemplate;
          if (this.saveInMemory) { observer.unobserve(this.element.nativeElement); }
        }
      });
    };

    this.intersectionObserver = new IntersectionObserver(intersectionObserverCallback);
    this.intersectionObserver.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.intersectionObserver.unobserve(this.element.nativeElement);
  }

}
