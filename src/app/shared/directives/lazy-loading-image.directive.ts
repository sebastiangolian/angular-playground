import { PhotoExternalService } from './../services/photo-external.service';
import { HttpClient } from '@angular/common/http';
import { Directive, ElementRef, EventEmitter, Input, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MemoryStorageService } from '../services/memory-storage.service';

@Directive({
  selector: '[lazyLoadingImage]'
})
export class LazyLoadingImageDirective implements OnDestroy {
  private subscription: Subscription = new Subscription();

  @Input() isBlob = false;
  @Input() saveInMemory = true
  @Output() visibleChange = new EventEmitter<boolean>();
  private isVisible = false;

  constructor(private element: ElementRef, protected http: HttpClient, private memoryStorageService: MemoryStorageService,
    private photoExternalService: PhotoExternalService) {
    this.visibleChange.emit(false);

    const intersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.isVisible) {
          if (this.saveInMemory) {
            this.setSrcFromMemory()
          } else {
            this.setSrc()
          }
          this.isVisible = true;
          this.visibleChange.emit(true);
          observer.unobserve(this.element.nativeElement);
        }
      });
    };

    const intersectionObserver = new IntersectionObserver(intersectionObserverCallback);
    intersectionObserver.observe(this.element.nativeElement);
  }

  private getBlobUrlSubscription(src: string): Subscription {
    return this.photoExternalService.getBlobUrl(src).subscribe(url => {
      this.element.nativeElement.src = url
      if (this.saveInMemory) this.memoryStorageService.add('lazy-loading-image', src, url)
    });
  }

  private setSrcFromMemory(): void {
    const memoryUrl = this.memoryStorageService.get('lazy-loading-image', this.element.nativeElement.getAttribute('data-src'))
    if (memoryUrl) {
      this.element.nativeElement.src = memoryUrl
    } else {
      this.setSrc()
    }
  }

  private setSrc() {
    if (this.isBlob) {
      this.subscription.add(this.getBlobUrlSubscription(this.element.nativeElement.getAttribute('data-src')));
    } else {
      this.element.nativeElement.src = this.element.nativeElement.getAttribute('data-src');
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) { this.subscription.unsubscribe(); }
  }

}
