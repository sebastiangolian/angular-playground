import { JphUser } from './../../interfaces/jph-user';
import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'jph-user-modal',
  templateUrl: './jph-user-modal.component.html',
  styleUrls: ['./jph-user-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JphUserModalComponent implements OnInit {
  @Input() user!: JphUser;
  @Input() title!: string;
  subject: Subject<JphUser | null> = new Subject<JphUser | null>();

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void { }

  onSubmit(): void {
    this.bsModalRef.hide();
    this.subject.next(this.user);
    this.subject.complete();
  }

  onCancel(): void {
    this.bsModalRef.hide();
    this.subject.next(null);
    this.subject.complete();
  }

}
