import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile-form-template-driven',
  templateUrl: './profile-form-template-driven.component.html',
  styleUrls: ['./profile-form-template-driven.component.css']
})
export class ProfileFormTemplateDrivenComponent {

  model: any = {};
  aliases: Array<String> = new Array<String>();

  public addDefault(): void {
    this.model.login = 'testlogin';
    this.model.email = 'test@email.com';
    this.model.city = 'test';
    this.model.zipcode =  '00-000';
  }

  onSubmit(f:NgForm) {
    console.log(this.model);
    console.log(f.value);
  }
}
