import { Component, OnInit } from '@angular/core';
import { NgForm, AbstractControlDirective } from '@angular/forms';

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css']
})
export class PageFormComponent implements OnInit {

  model: Profile = new Profile()
  aliases: Array<AbstractControlDirective> = new Array<AbstractControlDirective>()
  isSubmitted: boolean = false

  constructor() {}
  ngOnInit() {}

  public addDefault(): void {
    this.model.login = 'test';
    this.model.email = 'test@email.com';
    this.model.address.city = 'test';
    this.model.address.zipcode =  '00-000';
  }

  onSubmit(f:NgForm) {
    console.log("---- MODEL ----");
    console.log(this.model);
    console.log("---- FORM ----");
    console.log(f.value);

    this.isSubmitted = true
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
