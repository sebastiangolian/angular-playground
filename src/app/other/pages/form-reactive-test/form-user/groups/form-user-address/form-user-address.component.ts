import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'form-user-address',
  templateUrl: './form-user-address.component.html',
  styleUrls: ['./form-user-address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class FormUserAddressComponent implements OnInit {
  @Input() groupName = 'address';
  formGroup: FormGroup = this.fb.group({
    street: ['', Validators.required],
    zip: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private fgd: FormGroupDirective) {}

  ngOnInit() {
    this.fgd.form.addControl(this.groupName, this.formGroup);
  }
}
