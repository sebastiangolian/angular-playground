import { MessageType } from './../enums/message-type.enum';
import { DateTimeHelper } from './../helpers/date-time.helper';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Message } from '../interfaces/message.interface';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MessageService {
    private subject = new Subject<Message | null>();

    sendMessage(message: string, type: MessageType = MessageType.SUCCESS, dismissible: boolean = environment.messageDismissible,
        timeout: number = 0): void {
        if (timeout === 0) {
            switch (type) {
                case MessageType.SUCCESS: {
                    timeout = 3000;
                    break;
                }
                case MessageType.INFO: {
                    timeout = 2000;
                    break;
                }
                default: {
                    timeout = 10000;
                    break;
                }
            }
        }

        this.subject.next({ text: message, type, dismissible, timeout, datetime: DateTimeHelper.currentDateTime() });
    }

    clearMessages(): void {
        this.subject.next(null);
    }

    getMessage(): Observable<Message | null> {
        return this.subject.asObservable();
    }
}
