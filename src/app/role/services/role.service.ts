import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../interfaces/role.interface';
import { AbstractService } from 'src/app/shared/services/abstract.service';

@Injectable({providedIn: 'root'})
export class RoleService extends AbstractService<Role> {

  constructor(protected http: HttpClient) { 
    super(http) 
    this.url += "/role"
  }
}
