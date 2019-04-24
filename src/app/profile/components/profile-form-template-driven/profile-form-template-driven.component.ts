import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-form-template-driven',
  templateUrl: './profile-form-template-driven.component.html',
  styleUrls: ['./profile-form-template-driven.component.css']
})
export class ProfileFormTemplateDrivenComponent {

  profileForm: FormGroup = this.fb.group({
    firstName: ['',[Validators.required,Validators.minLength(3), Validators.maxLength(25)]],
    lastName: ['',[Validators.required,Validators.minLength(3), Validators.maxLength(25)]],
    address: this.fb.group({
      street: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      zip: ['',Validators.required]
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  get aliases(): FormArray {
    return this.profileForm.get('aliases') as FormArray;
  }

  get f() { return this.profileForm.controls; }

  public addAlias(): void {
    this.aliases.push(this.fb.control(''));
  }

  public addDefault(): void {
    this.profileForm.patchValue({
      firstName: 'Jan',
      lastName: 'Kowalski',
      address: {
        street: 'Testowa 2',
        city: 'Testowo',
        state: 'Polska',
        zip: '00-000'
      },
      aliases: [
        'alias 1'
      ]
    });
  }

  public onSubmit():void  {
    console.log(this.profileForm.value);
  }

}
