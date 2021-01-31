import { JphUser } from './../../interfaces/jph-user';
import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { JphUserModel } from '../../models/jph-user.model';

@Component({
  selector: 'jph-user-form',
  templateUrl: './jph-user-form.component.html',
  styleUrls: ['./jph-user-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JphUserFormComponent implements OnInit {

  @Input() user: JphUser = new JphUserModel();
  @Output() save: EventEmitter<JphUser> = new EventEmitter();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter();

  buttonSubmitText = 'Create';

  constructor() { }

  ngOnInit(): void {
    if (!this.user.id) {
      this.buttonSubmitText = 'Create';
    } else {
      this.buttonSubmitText = 'Update';
    }
  }

}
