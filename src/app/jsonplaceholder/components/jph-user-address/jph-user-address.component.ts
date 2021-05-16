import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { JphUserAddress } from '../../interfaces/jph-user';

@Component({
  selector: 'jph-user-address',
  templateUrl: './jph-user-address.component.html',
  styleUrls: ['./jph-user-address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JphUserAddressComponent implements OnInit {
  @Input() address!: JphUserAddress;

  constructor() {}

  ngOnInit(): void {}
}
