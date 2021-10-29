import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable, Subject, Subscription } from 'rxjs';
import { MessageType } from 'src/app/shared/enums/message-type.enum';
import { JphUserModalComponent } from '../../components/jph-user-modal/jph-user-modal.component';
import { JphUser } from '../../interfaces/jph-user';
import { JphUserModel } from '../../models/jph-user.model';
import { MessageService } from './../../../shared/services/message.service';
import { JphUserService } from './../../services/jph-user.service';

@Component({
  templateUrl: './jph-user.component.html',
  styleUrls: ['./jph-user.component.scss'],
})
export class JphUserComponent implements OnInit {
  users$: Observable<JphUser[]> = new Observable();

  constructor(private jphUserService: JphUserService, private modalService: BsModalService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.users$ = this.jphUserService.get();
  }

  onCreate(): void {
    this.userModal(new JphUserModel()).subscribe({
      next: (modalUser: JphUser) => this.postUser(modalUser),
      error: () => this.messageService.sendMessage('Create record failed', MessageType.error),
    });
  }

  onUpdate(user: JphUser): void {
    this.userModal(user).subscribe({
      next: (modalUser: JphUser) => this.putUser(modalUser),
      error: () => this.messageService.sendMessage('Update record failed', MessageType.error),
    });
  }

  onDelete(user: JphUser): void {
    this.jphUserService.delete(user).subscribe({
      complete: () => {
        this.messageService.sendMessage('Record deleted correctly');
      },
    });
  }

  private postUser(user: JphUser): Subscription {
    return this.jphUserService.post(user).subscribe({
      complete: () => {
        this.messageService.sendMessage('Record created correctly');
      },
    });
  }

  private putUser(user: JphUser): Subscription {
    return this.jphUserService.put(user).subscribe({
      complete: () => {
        this.messageService.sendMessage('Record updated correctly');
      },
    });
  }

  private userModal(user: JphUser): Observable<JphUser> {
    const subject = new Subject<JphUser>();
    let initialState: Partial<JphUserModalComponent> = {};
    if (user.id) {
      initialState = { user, title: 'Update user ' + user.id };
    } else {
      initialState = { user, title: 'Create user' };
    }

    const modal = this.modalService.show(JphUserModalComponent, {
      initialState,
      class: 'modal-md',
      ignoreBackdropClick: true,
    });
    if (modal.content) {
      modal.content.subject = subject;
    }
    return subject;
  }
}
