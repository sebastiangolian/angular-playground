import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FieldErrorComponent implements OnInit {

  @Input() formGroupRef: FormGroup = null;
  @Input() fieldName: string = null;

  get field() {
    return this.formGroupRef.get(this.fieldName);
  }

  constructor() { }

  ngOnInit() {
  }

}
