import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable, Subject, Subscription } from 'rxjs';
import { DatatableComponent } from 'src/app/shared/components/datatable/datatable.component';
import { HeaderService } from 'src/app/shared/services/header.service';
import { MessageService } from 'src/app/shared/services/message.service';
import { UserModalComponent } from '../../components/user-modal/user-modal.component';
import { User } from '../../interfaces/user.interface';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { ModalConfirmService } from 'src/app/shared/components/modal-confirm/services/modal-confirm.service';
import { RoleModalSearchComponent } from 'src/app/role/components/role-modal-search/role-modal-search.component';
import { Role } from 'src/app/role/interfaces/role.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user-datatable.component.html',
  styleUrls: ['./user-datatable.component.css']
})
export class UserDatatableComponent extends DatatableComponent implements OnDestroy {

  limit = 10
  filterOneSign = ["email"]
  model: User = new UserModel()
  items: User[];

  private _subscription: Subscription = new Subscription();

  constructor(private headerService: HeaderService, private messageService: MessageService, private modalService: BsModalService,
    private userService: UserService, private router: Router, private modalConfirmService: ModalConfirmService) {
    super();
    this.headerService.set("Users")
  }

  onRefresh() {
    this._subscription.add(this.getUsers())
  }

  onDownload(user: User) {
    this._subscription.add(this.downloadFile(user))
  }

  onView(user: User) {
    this.router.navigate(['user/', user.id])
  }

  onEdit(user: User) {
    this._subscription.add(this.putUserModal(user))
  }

  onDelete(role: User) {
    let content: string = `Are you sure you want to delete the record ?`
    this._subscription.add(this.modalConfirmService.confirm(content).subscribe(result => {
      if (result) {
        this._subscription.add(this.deleteUser(role))
      }
    }))
  }

  onCreate() {
    this._subscription.add(this.postUserModal())
  }

  onSetRole(user: User) {
    this._subscription.add(this.setRoleToUser(user))
  }

  private getUsers(): Subscription {
    return this.userService.get(this.limit, this.page, this.sortBy, this.order, this.filters).subscribe(ret => {
      this.items = ret.items
      this.total = ret.total
    })
  }

  private downloadFile(user: User): Subscription {
    return this.userService.downloadFile(user).subscribe()
  }

  private postUserModal(): Subscription {
    return this.userModal(null).subscribe({
      next: (user: User) => {
        if (user != null) this.postUser(user)
      },
      error: () => this.messageService.sendMessage("Adding a new record failed", "danger")
    })
  }

  private putUserModal(user: User): Subscription {
    return this.userModal(user).subscribe({
      next: (user: User) => {
        if (user != null) this.putUser(user)
      },
      error: () => this.messageService.sendMessage("Update record failed", "danger")
    })
  }

  private postUser(user: User): Subscription {
    return this.userService.create(user).subscribe({
      complete: () => {
        this.onRefresh()
        this.messageService.sendMessage("Record added correctly")
      }
    })
  }

  private putUser(user: User): Subscription {
    return this.userService.update(user.id, user).subscribe({
      complete: () => {
        this.onRefresh()
        this.messageService.sendMessage("Record updated correctly")
      }
    })
  }

  private deleteUser(user: User): Subscription {
    return this.userService.delete(user.id).subscribe({
      complete: () => {
        this.onRefresh()
        this.messageService.sendMessage("Record deleted correctly")
      }
    })
  }

  private patchUser(id:string, body: any): Subscription {
    return this.userService.patch(id, body).subscribe({
      complete: () => {
        this.onRefresh()
        this.messageService.sendMessage("Role has been assigned correctly")
      }
    })
  }

  private setRoleToUser(user: User): Subscription {
    return this.getModalRole().subscribe({
      next: (role: Role) => {
        if(role != null)
          this.patchUser(user.id.toString(), {"idRole": role.id})
      },
      error: () => this.messageService.sendMessage("The role was not assigned correctly", "danger")
    })
  }

  private userModal(user: User): Observable<User> {
    const subject = new Subject<User>();
    this.modalService.show(UserModalComponent, {
      initialState: {
        model: user
      },
      class: 'modal-md',
      ignoreBackdropClick: true
    }).content.subject = subject
    return subject
  }

  private getModalRole(): Observable<Role> {
    const subject = new Subject<Role>();
    this.modalService.show(RoleModalSearchComponent, {
      initialState: {},
      class: 'modal-xl',
      ignoreBackdropClick: true
    }).content.subject = subject
    return subject
  }

  ngOnDestroy() {
    if(this._subscription) this._subscription.unsubscribe()
  }
}
