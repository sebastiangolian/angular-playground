import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDatatableComponent } from './pages/user-datatable/user-datatable.component';
import { UserIndexComponent } from './pages/user-index/user-index.component';
import { UserItemComponent } from './pages/user-item/user-item.component';
import { UserSearchComponent } from './pages/user-search/user-search.component';

const routes: Routes = [
  { path: '', component: UserIndexComponent },
  { path: 'datatable', component: UserDatatableComponent },
  { path: 'search', component: UserSearchComponent },
  { path: ':id', component: UserItemComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
