import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageTestComponent } from './components/page-test/page-test.component';
import { PageErrorComponent } from '../shared/components/page-error/page-error.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'home', component: PageHomeComponent },
  { path: 'test', component: PageTestComponent },
  { path: `movie`, loadChildren: () => import(`./../movie/movie.module`).then(m => m.MovieModule) },
  { path: 'error', component: PageErrorComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
