import { JphUserCompany } from './../../interfaces/jph-user';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'jph-user-company',
  templateUrl: './jph-user-company.component.html',
  styleUrls: ['./jph-user-company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JphUserCompanyComponent implements OnInit {
  @Input() company!: JphUserCompany;
  constructor() {}

  ngOnInit(): void {}
}
