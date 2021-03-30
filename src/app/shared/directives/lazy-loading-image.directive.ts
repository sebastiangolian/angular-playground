import { environment } from './../../../environments/environment';
import { PhotoExternalService } from './../services/photo-external.service';
import { HttpClient } from '@angular/common/http';
import { Directive, ElementRef, EventEmitter, Input, Output, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { MemoryStorageService } from '../services/memory-storage.service';

@Directive({
  selector: '[lazyLoadingImage]',
})
export class LazyLoadingImageDirective implements OnDestroy, OnChanges {
  @Input() originalSrc = '';
  @Input() isBlob = false;
  @Input() saveInMemory = environment.lazyLoadingImageSaveInMemory;
  @Output() visibleChange = new EventEmitter<boolean>();

  private subscription: Subscription = new Subscription();

  constructor(
    private element: ElementRef,
    protected http: HttpClient,
    private memoryStorageService: MemoryStorageService,
    private photoExternalService: PhotoExternalService,
  ) {
    this.runIntersectionObserver();
  }

  ngOnChanges(): void {
    this.runIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private runIntersectionObserver(): void {
    this.visibleChange.emit(false);

    const intersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (this.saveInMemory) {
            this.setSrcFromMemory();
          } else {
            this.setSrc();
          }
          this.visibleChange.emit(true);
          observer.unobserve(this.element.nativeElement);
        }
      });
    };

    const intersectionObserver = new IntersectionObserver(intersectionObserverCallback);
    intersectionObserver.observe(this.element.nativeElement);
  }

  private getBlobUrlSubscription(src: string): Subscription {
    return this.photoExternalService.getBlobUrl(src).subscribe((url) => {
      this.element.nativeElement.src = url;
      if (this.saveInMemory) {
        this.memoryStorageService.add('lazy-loading-image', src, url);
      }
    });
  }

  private setSrcFromMemory(): void {
    const memoryUrl = this.memoryStorageService.get('lazy-loading-image', this.element.nativeElement.getAttribute('data-src'));
    if (memoryUrl) {
      this.element.nativeElement.src = memoryUrl;
    } else {
      this.setSrc();
    }
  }

  private setSrc(): void {
    if (this.isBlob) {
      this.subscription.add(this.getBlobUrlSubscription(this.element.nativeElement.getAttribute('data-src')));
    } else {
      this.element.nativeElement.src = this.element.nativeElement.getAttribute('data-src');
    }
  }
}
