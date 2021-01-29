import { Observable } from 'rxjs';
import { JphUserService } from './../../services/jph-user.service';
import { Component, OnInit } from '@angular/core';
import { JphUser } from '../../interfaces/jph-user';

@Component({
  templateUrl: './jph-user.component.html',
  styleUrls: ['./jph-user.component.css']
})
export class JphUserComponent implements OnInit {

  users$: Observable<JphUser[]> = new Observable();
  constructor(private jphUserService: JphUserService) { }

  ngOnInit(): void {
    this.users$ = this.jphUserService.get()
  }

  onUpdate(user: JphUser) {
    console.log(user)
  }

  onDelete(user: JphUser) {
    console.log(user)
  }

}
