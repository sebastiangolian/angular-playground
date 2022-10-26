import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ControlContainer, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'form-user-services',
  templateUrl: './form-user-services.component.html',
  styleUrls: ['./form-user-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class FormUserServicesComponent implements OnInit {
  @Input() groupName = 'services';
  formGroup: UntypedFormGroup = this.fb.group([]);
  inputs: FormInput[] = [
    { name: 'isEnabled', label: 'Is active', type: 'checkbox', value: true, required: true, pattern: '' },
    { name: 'isAdmin', label: 'Is admin', type: 'checkbox', value: false, required: true, pattern: '' },
    { name: 'phone', label: 'Phone', type: 'textbox', value: '666666666', required: true, pattern: '[0-9]*' },
  ];

  constructor(private fb: UntypedFormBuilder, private fgd: FormGroupDirective) {}

  ngOnInit(): void {
    this.inputs.forEach((input) => {
      this.formGroup.addControl(input.name, new UntypedFormControl(''));
      this.formGroup.get(input.name)?.patchValue(input.value);

      const validators: any[] = [];
      if (input.required) {
        validators.push(Validators.required);
      }
      if (input.pattern) {
        validators.push(Validators.pattern(input.pattern));
      }
      if (validators.length > 0) {
        this.formGroup.get(input.name)?.setValidators(validators);
      }
    });
    this.fgd.form.addControl(this.groupName, this.formGroup);
  }
}

export interface FormInput {
  name: string;
  label: string;
  type: 'checkbox' | 'textbox';
  value: boolean | string;
  required: boolean;
  pattern: string;
}
