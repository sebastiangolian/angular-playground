import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ControlContainer, UntypedFormArray, UntypedFormBuilder, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'form-user-aliases',
  templateUrl: './form-user-aliases.component.html',
  styleUrls: ['./form-user-aliases.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class FormUserAliasesComponent implements OnInit {
  @Input() groupName = 'aliases';
  formArray: UntypedFormArray = this.fb.array([this.fb.control('')]);

  constructor(private fb: UntypedFormBuilder, private fgd: FormGroupDirective) {}

  ngOnInit() {
    this.fgd.form.addControl(this.groupName, this.formArray);
  }

  addAlias(): void {
    this.formArray.push(this.fb.control(''));
  }
}
