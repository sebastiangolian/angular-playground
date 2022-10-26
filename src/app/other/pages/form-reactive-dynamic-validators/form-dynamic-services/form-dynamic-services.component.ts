import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  ControlContainer,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  FormGroupDirective,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'form-dynamic-services',
  templateUrl: './form-dynamic-services.component.html',
  styleUrls: ['./form-dynamic-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class FormDynamicServicesComponent implements OnInit, OnChanges {
  @Input() groupName = 'services';
  @Input() validators = true;
  formGroup: UntypedFormGroup = this.fb.group([]);
  inputs: FormInput[] = [
    { name: 'isEnabled', label: 'Is active', type: 'checkbox', value: '', required: true, pattern: '' },
    { name: 'isAdmin', label: 'Is admin', type: 'checkbox', value: '', required: true, pattern: '' },
    { name: 'phone', label: 'Phone', type: 'textbox', value: '', required: true, pattern: '[0-9]*' },
  ];

  constructor(private fb: UntypedFormBuilder, private fgd: FormGroupDirective) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.toogleValidation(this.validators);
  }

  ngOnInit(): void {
    this.inputs.forEach((input) => {
      this.formGroup.addControl(input.name, new UntypedFormControl(''));
      this.formGroup.get(input.name)?.patchValue(input.value);
      this.formGroup.get(input.name)?.setValidators(this.createValidators(input));
    });
    this.fgd.form.addControl(this.groupName, this.formGroup);
  }

  private createValidators(input: FormInput): ValidatorFn[] {
    const validators: any[] = [];
    if (input.required && input.type === 'checkbox') {
      validators.push(Validators.requiredTrue);
    }
    if (input.required && input.type !== 'checkbox') {
      validators.push(Validators.required);
    }
    if (input.pattern) {
      validators.push(Validators.pattern(input.pattern));
    }
    return validators;
  }

  private toogleValidation(isValidation: boolean): void {
    if (!isValidation) {
      this.inputs.forEach((input) => {
        this.formGroup.get(input.name)?.clearValidators();
        this.formGroup.get(input.name)?.updateValueAndValidity();
      });
    } else {
      this.inputs.forEach((input) => {
        this.formGroup.get(input.name)?.setValidators(this.createValidators(input));
        this.formGroup.get(input.name)?.updateValueAndValidity();
      });
    }
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
