import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JphPhotoTableComponent } from './pages/jph-photo-table/jph-photo-table.component';
import { JphPhotoComponent } from './pages/jph-photo/jph-photo.component';
import { JphUserComponent } from './pages/jph-user/jph-user.component';
import { JphComponent } from './pages/jph/jph.component';

const routes: Routes = [
  { path: '', component: JphComponent },
  { path: 'user', component: JphUserComponent },
  { path: 'photo', component: JphPhotoComponent },
  { path: 'photo-table', component: JphPhotoTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsonplaceholderRoutingModule { }
