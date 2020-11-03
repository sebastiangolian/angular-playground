import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WikipediaComponent } from './pages/wikipedia/wikipedia.component';

const routes: Routes = [{ path: '', component: WikipediaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikipediaRoutingModule { }
