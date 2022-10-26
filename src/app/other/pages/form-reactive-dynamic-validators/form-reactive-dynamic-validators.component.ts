import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './form-reactive-dynamic-validators.component.html',
  styleUrls: ['./form-reactive-dynamic-validators.component.scss'],
})
export class FormReactiveDynamicValidatorsComponent implements OnInit {
  form!: UntypedFormGroup;
  childValidators = true;

  constructor(private fb: UntypedFormBuilder) {}

  get name(): UntypedFormControl {
    return this.form.get('name') as UntypedFormControl;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

  onRemoveValidators(): void {
    this.name.clearValidators();
    this.name.updateValueAndValidity();
    this.childValidators = false;
  }

  onAddValidators(): void {
    this.name.setValidators([Validators.required, Validators.minLength(3), Validators.maxLength(25)]);
    this.name.updateValueAndValidity();
    this.childValidators = true;
  }
}
