import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { HttpHandler, HttpRequest } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MessageService } from '../services/message.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error('Request for ', request.url,' Response Status ', error.status,' With error ', error.message);
        this.messageService.message = error.message;
        return throwError(error);
      })
    );
  }
}