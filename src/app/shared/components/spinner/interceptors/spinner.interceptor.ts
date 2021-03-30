import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  private visible = true;
  private delay = 100; // delay visible in milliseconds

  constructor(public spinnerService: SpinnerService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.visible = true;
    setTimeout(() => {
      if (this.visible) {
        this.spinnerService.show();
      }
    }, this.delay);

    return next.handle(req).pipe(
      finalize(() => {
        this.visible = false;
        this.spinnerService.hide();
      }),
    );
  }
}
