import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ControlContainer, UntypedFormBuilder, UntypedFormGroup, FormGroupDirective, Validators } from '@angular/forms';

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
  formGroup: UntypedFormGroup = this.fb.group({
    street: ['', Validators.required],
    zip: ['', Validators.required],
  });
  constructor(private fb: UntypedFormBuilder, private fgd: FormGroupDirective) {}

  ngOnInit() {
    this.fgd.form.addControl(this.groupName, this.formGroup);
  }
}
