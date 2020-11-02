import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs/internal/Subject';
import { User } from '../../interfaces/user.interface';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserModalComponent implements OnInit {

  title: string = "Aktualizuj użytkownika"
  model: User
  subject: Subject<User>

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    if(this.model == null)  {
      this.title = "Dodaj użytkownika"
      this.model = new UserModel()
      this.model.email = 'test@gmail.com'
      this.model.active = true
      this.model.zipCode = "00-000"
    }
  }

  onCreate() {
    this.bsModalRef.hide();
    this.subject.next(this.model);
    this.subject.complete();
  }

  onCancel() {
    this.bsModalRef.hide();
    this.subject.next(null);
    this.subject.complete();
  }

}
