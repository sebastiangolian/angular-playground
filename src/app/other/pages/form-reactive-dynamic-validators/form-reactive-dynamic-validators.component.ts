import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './form-reactive-dynamic-validators.component.html',
  styleUrls: ['./form-reactive-dynamic-validators.component.scss'],
})
export class FormReactiveDynamicValidatorsComponent implements OnInit {
  form!: FormGroup;
  childValidators = true;

  constructor(private fb: FormBuilder) {}

  get name(): FormControl {
    return this.form.get('name') as FormControl;
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
