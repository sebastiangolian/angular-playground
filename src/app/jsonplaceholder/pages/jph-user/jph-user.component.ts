import { MessageService } from './../../../shared/services/message.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { JphUserService } from './../../services/jph-user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { JphUserModalComponent } from '../../components/jph-user-modal/jph-user-modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { JphUser } from '../../interfaces/jph-user';
import { MessageType } from 'src/app/shared/enums/message-type.enum';
import { JphUserModel } from '../../models/jph-user.model';

@Component({
  templateUrl: './jph-user.component.html',
  styleUrls: ['./jph-user.component.css'],
})
export class JphUserComponent implements OnInit, OnDestroy {
  users$: Observable<JphUser[]> = new Observable();
  private subscription: Subscription = new Subscription();

  constructor(private jphUserService: JphUserService, private modalService: BsModalService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.users$ = this.jphUserService.get();
  }

  onCreate(): void {
    this.subscription.add(this.postUserModal());
  }

  onUpdate(user: JphUser): void {
    this.subscription.add(this.putUserModal(user));
  }

  onDelete(user: JphUser): void {
    this.subscription.add(this.deleteUser(user));
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

  private deleteUser(user: JphUser): Subscription {
    return this.jphUserService.delete(user).subscribe({
      complete: () => {
        this.messageService.sendMessage('Record deleted correctly');
      },
    });
  }

  private postUserModal(): Subscription {
    return this.userModal(new JphUserModel()).subscribe({
      next: (modalUser: JphUser) => this.postUser(modalUser),
      error: () => this.messageService.sendMessage('Create record failed', MessageType.ERROR),
    });
  }

  private putUserModal(user: JphUser): Subscription {
    return this.userModal(user).subscribe({
      next: (modalUser: JphUser) => this.putUser(modalUser),
      error: () => this.messageService.sendMessage('Update record failed', MessageType.ERROR),
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

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
