import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JphUserComponent } from './pages/jph-user/jph-user.component';
import { JphComponent } from './pages/jph/jph.component';

const routes: Routes = [
  { path: '', component: JphComponent },
  { path: 'user', component: JphUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsonplaceholderRoutingModule { }
