import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MessageService } from 'src/app/shared/services/message.service';
import { MessageType } from 'src/app/shared/enums/message-type.enum';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private messageService: MessageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(environment.httpRetry),
      catchError((errorResponse: HttpErrorResponse) => {
        if (errorResponse.error instanceof ErrorEvent) {
          this.clientSideError(errorResponse.error);
        } else {
          this.serverSideError(errorResponse, request);
        }
        return throwError(errorResponse);
      }),
    );
  }

  clientSideError(error: ErrorEvent): void {
    this.messageService.sendMessage(error.error.message, MessageType.ERROR);
  }

  serverSideError(error: HttpErrorResponse, request: HttpRequest<any>): void {
    switch (error.status) {
      case 401: {
        if (request.url.includes('/user/login')) {
          break;
        }
        this.messageService.sendMessage('Twoja sesja wygasła. Zaloguj się ponownie', MessageType.INFO);
        break;
      }
      case 403: {
        this.messageService.sendMessage('Nie masz uprawnień do tego zasobu', MessageType.WARNING);
        break;
      }
      case 404: {
        this.messageService.sendMessage('Podany zasób nie istnieje', MessageType.INFO);
        break;
      }
      case 500: {
        this.messageService.sendMessage('Wystąpił nieoczekiwany problem. Proszę spróbuj ponownie', MessageType.ERROR);
        break;
      }
      default: {
        this.messageService.sendMessage(`(${error.status}) ${error.message}`, MessageType.ERROR);
        break;
      }
    }
  }
}
