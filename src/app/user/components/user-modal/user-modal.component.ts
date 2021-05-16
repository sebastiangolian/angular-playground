import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserModalComponent implements OnInit {
  title = 'Update user';
  model: User = new UserModel();
  subject: Subject<User> = new Subject<User>();

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {
    if (this.model.id === '') {
      this.title = 'Add user';
      this.model = new UserModel();
      this.model.email = 'test@gmail.com';
      this.model.active = true;
      this.model.zipCode = '00-000';
    }
  }

  onCreate(): void {
    this.bsModalRef.hide();
    this.subject.next(this.model);
    this.subject.complete();
  }

  onCancel(): void {
    this.bsModalRef.hide();
    this.subject.complete();
  }
}
