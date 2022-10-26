import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {
  form!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    });
  }

  get aliases(): UntypedFormArray {
    return this.form.get('aliases') as UntypedFormArray;
  }

  addDefault(): void {
    this.form.patchValue({
      name: 'Jan Kowalski',
      address: {
        street: 'Testowa 2',
        zip: '00-000',
      },
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
    console.log(this.aliases.value);
  }
}
