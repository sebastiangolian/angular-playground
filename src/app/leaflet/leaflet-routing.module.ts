import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeafletComponent } from './pages/leaflet/leaflet.component';

const routes: Routes = [
  { path: '', component: LeafletComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeafletRoutingModule { }
