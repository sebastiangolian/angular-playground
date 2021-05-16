import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageType } from '../../enums/message-type.enum';
import { Message } from '../../interfaces/message.interface';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'messages-modal',
  templateUrl: './messages-modal.component.html',
  styleUrls: ['./messages-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class MessagesModalComponent implements OnInit, OnDestroy {
  message!: Message;
  dateTime = '';
  headerClass = '';
  headerText = '';
  private subscription: Subscription = new Subscription();

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.subscription.add(this.getMessages());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getMessages(): Subscription {
    return this.messageService.getMessage().subscribe((message) => {
      if (message) {
        this.headerClass = this.headerClassByMessage(message);
        this.headerText = this.headerTextByMessage(message);
        this.message = message;
        if (message.dateTime) {
          this.dateTime = message.dateTime;
        }
        this.messageService.clearMessages();
      }
    });
  }

  private headerClassByMessage(message: Message): string {
    switch (message.type) {
      case MessageType.success:
        return 'bg-success text-light';
      case MessageType.info:
        return 'bg-info text-light';
      case MessageType.warning:
        return 'bg-warning text-dark';
      case MessageType.error:
        return 'bg-danger text-light';
      default:
        return '';
    }
  }

  private headerTextByMessage(message: Message): string {
    switch (message.type) {
      case MessageType.success:
        return 'Success';
      case MessageType.info:
        return 'Info';
      case MessageType.warning:
        return 'Warning';
      case MessageType.error:
        return 'Error';
      default:
        return '';
    }
  }
}
