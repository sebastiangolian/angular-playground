import { Component, OnDestroy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject, Subscription } from 'rxjs';
import { DatatableSearchComponent } from 'src/app/shared/components/datatable/datatable-search.component';
import { ModalConfirmService } from 'src/app/shared/components/modal-confirm/services/modal-confirm.service';
import { Role } from '../../interfaces/role.interface';
import { RoleModel } from '../../models/role.model';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-role-modal-search',
  templateUrl: './role-modal-search.component.html',
  styleUrls: ['./role-modal-search.component.css'],
})
export class RoleModalSearchComponent extends DatatableSearchComponent implements OnDestroy {

  model: Role = new RoleModel();
  items: Role[] = [];
  subject: Subject<Role|null> = new Subject<Role|null>();

  private subscription: Subscription = new Subscription();

  constructor(private roleService: RoleService, public bsModalRef: BsModalRef, private modalConfirmService: ModalConfirmService) {
    super();
    this.onRefresh();
  }

  onRefresh(): void {
    this.subscription.add(this.getRoles());
  }

  private getRoles(): Subscription {
    return this.roleService.get(this.limit, this.page, this.sortBy, this.order, this.filters).subscribe(ret => {
      this.items = ret.items;
      this.total = ret.total;
    });
  }

  onSelectConfirm(role: Role): void {
    const content = `Are you sure you want to assign a role?`;
    this.subscription.add(this.modalConfirmService.confirm(content).subscribe(result => {
      if (result) {
        this.onSelect(role);
      }
    }));
  }

  onSelect(role: Role): void {
    this.bsModalRef.hide();
    this.subject.next(role);
    this.subject.complete();
  }

  onCancel(): void {
    this.bsModalRef.hide();
    this.subject.next(null);
    this.subject.complete();
  }

  ngOnDestroy(): void {
    if (this.subscription) { this.subscription.unsubscribe(); }
  }
}
