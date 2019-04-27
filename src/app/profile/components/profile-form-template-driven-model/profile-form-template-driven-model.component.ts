import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile-form-template-driven-model',
  templateUrl: './profile-form-template-driven-model.component.html',
  styleUrls: ['./profile-form-template-driven-model.component.css']
})
export class ProfileFormTemplateDrivenModelComponent {

  model: Profile = new Profile();
  aliases: Array<String> = new Array<String>();

  public addDefault(): void {
    this.model.login = 'testlogin';
    this.model.email = 'test@email.com';
    this.model.address.city = 'test';
    this.model.address.zipcode =  '00-000';
  }

  onSubmit(f:NgForm) {
    console.log(this.model);
    console.log(f.value);
  }
}

export class Profile
{
  login: string = "";
  email: string = "";
  address: Address = new Address();
  aliases: string[] = new Array<string>();
}

export class Address
{
  city: string = "";
  zipcode: string = "";
}
