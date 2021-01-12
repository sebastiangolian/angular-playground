import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Message } from 'src/app/shared/interfaces/message.interface';
import { MessageService } from 'src/app/shared/services/message.service';
import { MessageType } from 'src/app/shared/enums/message-type.enum';
import { MessageModel } from 'src/app/shared/models/message.model';

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
          this.messageService.sendMessageByObject(message)
          return throwError(message.text);
        })
      )
  }

  clientSideError(error: ErrorEvent): Message {
    let message: Message = new MessageModel()
    message.text = error.error.message
    message.type = MessageType.ERROR
    return message
  }

  serverSideError(error: HttpErrorResponse): Message {
    let message = new MessageModel()
    switch (error.status) {
      case 401: {
        message.text = "Twoja sesja wygasła. Zaloguj się ponownie"
        message.type = MessageType.INFO
        break;
      }
      case 403: {
        message.text = "Nie masz uprawnień do tego zasobu"
        message.type = MessageType.WARNING
        break;
      }
      case 404: {
        message.text = "Podany zasób nie istnieje"
        message.type = MessageType.INFO
        break;
      }
      case 500: {
        message.text = "Wystąpił nieoczekiwany problem. Proszę spróbuj ponownie"
        message.type = MessageType.ERROR
        break;
      }
      default: {
        message.text = `(${error.status}) ${error.message}`
        message.type = MessageType.ERROR
        break;
      }
    }

    return message
  }
}
