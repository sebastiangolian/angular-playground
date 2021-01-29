import { JphUser } from './../../interfaces/jph-user';
import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { JphUserCompanyModel, JphUserModel } from '../../models/jph-user.model';

@Component({
  selector: 'jph-user-form',
  templateUrl: './jph-user-form.component.html',
  styleUrls: ['./jph-user-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JphUserFormComponent implements OnInit {

  @Input() user: JphUser = new JphUserModel()
  @Output() submit: EventEmitter<JphUser> = new EventEmitter();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter();

  buttonSubmitText: string = 'Create'

  constructor() { }

  ngOnInit(): void {
    if (!this.user.id) {
      this.buttonSubmitText = 'Create'
    } else {
      this.buttonSubmitText = 'Update'
    }
  }

}
