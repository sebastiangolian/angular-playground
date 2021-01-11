
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message } from '../../interfaces/message.interface';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'messages-modal',
  templateUrl: './messages-modal.component.html',
  styleUrls: ['./messages-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MessagesModalComponent implements OnInit, OnDestroy {
  message!: Message;
  headerClass: string = ''
  headerText: string = ''
  private subscription: Subscription = new Subscription();

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.subscription.add(this.getMessages());
  }

  private getMessages(): Subscription {
    return this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.headerClass = this.headerClassByMessage(message)
        this.headerText = this.headerTextByMessage(message)
        this.message = message;
        this.messageService.clearMessages()
      }
    });
  }

  private headerClassByMessage(message: Message): string {
    switch (message.type) {
      case "success":
        return 'bg-success text-light'
      case "info":
        return 'bg-info text-light'
      case "warning":
        return 'bg-warning text-dark'
      case "danger":
        return 'bg-danger text-light'
      default:
        return ''
    }
  }

  private headerTextByMessage(message: Message): string {
    switch (message.type) {
      case "success":
        return 'Powodzenie'
      case "info":
        return 'Informacja'
      case "warning":
        return 'Ostrzeżenie'
      case "danger":
        return 'Wystąpił błąd w działaniu aplikacji'
      default:
        return ''
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
