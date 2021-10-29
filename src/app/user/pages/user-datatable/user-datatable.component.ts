import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable, Subject, Subscription } from 'rxjs';
import { DataTableComponent } from 'src/app/shared/classes/datatable.component';
import { ModalConfirmService } from 'src/app/shared/components/modal-confirm/services/modal-confirm.service';
import { MessageType } from 'src/app/shared/enums/message-type.enum';
import { HeaderService } from 'src/app/shared/services/header.service';
import { MessageService } from 'src/app/shared/services/message.service';
import { RoleModalSearchComponent } from 'src/app/user/components/role-modal-search/role-modal-search.component';
import { Role } from 'src/app/user/interfaces/role.interface';
import { UserModalComponent } from '../../components/user-modal/user-modal.component';
import { User } from '../../interfaces/user.interface';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user-datatable.component.html',
  styleUrls: ['./user-datatable.component.scss'],
})
export class UserDataTableComponent extends DataTableComponent<User> {
  model: User = new UserModel();
  constructor(
    private headerService: HeaderService,
    private messageService: MessageService,
    private modalService: BsModalService,
    private userService: UserService,
    private router: Router,
    private modalConfirmService: ModalConfirmService,
  ) {
    super();
    this.headerService.set('Users');
    this.filterOneSign = ['id'];
  }

  onRefresh(): void {
    this.getUsers();
  }

  onDownload(user: User): void {
    this.userService.downloadFile(user).subscribe();
  }

  onView(user: User): void {
    this.router.navigate(['user/', user.id]);
  }

  onEdit(user: User): void {
    this.userModal(user).subscribe({
      next: (modalUser: User) => {
        if (modalUser !== null) {
          this.userService.update(modalUser.id, user).subscribe({
            complete: () => {
              this.onRefresh();
              this.messageService.sendMessage('Record updated correctly');
            },
          });
        }
      },
      error: () => this.messageService.sendMessage('Update record failed', MessageType.error),
    });
  }

  onDelete(user: User): void {
    const content = `Are you sure you want to delete the record ?`;
    this.modalConfirmService.confirm(content).subscribe((result) => {
      if (result) {
        this.userService.delete(user.id).subscribe({
          complete: () => {
            this.onRefresh();
            this.messageService.sendMessage('Record deleted correctly');
          },
        });
      }
    });
  }

  onCreate(): void {
    this.userModal(new UserModel()).subscribe({
      next: (user: User) => {
        if (user !== null) {
          this.userService.post(user).subscribe({
            complete: () => {
              this.onRefresh();
              this.messageService.sendMessage('Record added correctly');
            },
          });
        }
      },
      error: () => this.messageService.sendMessage('Adding a new record failed', MessageType.error),
    });
  }

  onSetRole(user: User): void {
    this.getModalRole().subscribe({
      next: (role: Role) => {
        this.userService.patch(user.id, { idRole: role.id }).subscribe({
          complete: () => {
            this.onRefresh();
            this.messageService.sendMessage('Role has been assigned correctly');
          },
        });
      },
      error: () => this.messageService.sendMessage('The role was not assigned correctly', MessageType.error),
    });
  }

  private getUsers(): Subscription {
    return this.userService.get(this.limit, this.page, this.sortBy, this.order, this.filters).subscribe((ret) => {
      this.items = ret.items;
      this.total = ret.total;
    });
  }

  private userModal(user: User): Observable<User> {
    const subject = new Subject<User>();
    let initialState: Partial<UserModalComponent> = {};
    if (user) {
      initialState = { model: user };
    }
    const modal = this.modalService.show(UserModalComponent, {
      initialState,
      class: 'modal-md',
      ignoreBackdropClick: true,
    });
    if (modal.content) {
      modal.content.subject = subject;
    }
    return subject;
  }

  private getModalRole(): Observable<Role> {
    const subject = new Subject<Role>();
    const modal = this.modalService.show(RoleModalSearchComponent, {
      initialState: {},
      class: 'modal-xl',
      ignoreBackdropClick: true,
    });
    if (modal.content) {
      modal.content.subject = subject;
    }
    return subject;
  }
}
