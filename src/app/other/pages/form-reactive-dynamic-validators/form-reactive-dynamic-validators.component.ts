import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './form-reactive-dynamic-validators.component.html',
  styleUrls: ['./form-reactive-dynamic-validators.component.scss'],
})
export class FormReactiveDynamicValidatorsComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
