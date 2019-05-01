import { Component, assertPlatform } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form-reactive',
  templateUrl: './profile-form-reactive.component.html',
  styleUrls: ['./profile-form-reactive.component.css']
})
export class ProfileFormReactiveComponent {

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

  public removeAlias(): void {
    if(this.aliases.length > 0)
    {
      this.aliases.removeAt(this.aliases.length-1);
    }
    else
    {
      alert("No item to delete.")
    }
    
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
