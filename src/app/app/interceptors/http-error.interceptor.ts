import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Message } from 'src/app/shared/interfaces/message.interface';
import { MessageService } from 'src/app/shared/services/message.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(environment.httpRetry),
        catchError((error: HttpErrorResponse) => {
          let message: Message;
          if (error.error instanceof ErrorEvent) {
            message = this.clientSideError(error.error);
          } else {
            message = this.serverSideError(error);
          }
          this.messageService.sendMessage(message.text, message.type)
          return throwError(message.text);
        })
      )
  }

  clientSideError(error: ErrorEvent): Message {
    return { text: error.error.message, type: "danger", timeout: 5000, dismissible: true }
  }

  serverSideError(error: HttpErrorResponse): Message {
    switch (error.status) {
      case 401: {
        return { text: "Twoja sesja wygasła. Zaloguj się ponownie", type: "warning", timeout: 5000, dismissible: true }
      }
      case 403: {
        return { text: `Nie masz uprawnień do tego zasobu`, type: "warning", timeout: 5000, dismissible: true }
      }
      case 404: {
        return { text: `Podany zasób nie istnieje`, type: "info", timeout: 5000, dismissible: true }
      }
      case 500: {
        return { text: `Wystąpił nieoczekiwany problem. Proszę spróbuj ponownie`, type: "danger", timeout: 5000, dismissible: true }
      }
      default: {
        return { text: `(${error.status}) ${error.message}`, type: "danger", timeout: 5000, dismissible: true }
      }
    }
  }
}
