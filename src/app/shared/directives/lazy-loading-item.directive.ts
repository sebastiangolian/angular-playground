import { HttpClient } from '@angular/common/http';
import { Directive, ElementRef, Input } from '@angular/core';
import { MemoryStorageService } from '../services/memory-storage.service';

@Directive({
  selector: '[lazyLoadingItem]'
})
export class LazyLoadingItemDirective {
  @Input() saveInMemory: boolean = true
  constructor(private element: ElementRef, protected http: HttpClient, private memoryStorageService: MemoryStorageService) {
    const intersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.element.nativeElement.innerHTML = this.memoryStorageService.get('lazy-loading-item', entry.target.slot)
          if (this.saveInMemory) observer.unobserve(entry.target);
        } else {
          this.element.nativeElement.slot = Math.random().toString(36).substring(2)
          this.memoryStorageService.add('lazy-loading-item', this.element.nativeElement.slot, this.element.nativeElement.innerHTML)
          this.element.nativeElement.innerHTML = '<div style="height:100px; border: none;"></div>'
        }
      });
    };

    const intersectionObserver = new IntersectionObserver(intersectionObserverCallback);
    intersectionObserver.observe(this.element.nativeElement);
  }
}
