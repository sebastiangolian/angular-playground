import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'user', loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
  { path: 'role', loadChildren: () => import('../role/role.module').then(m => m.RoleModule) },
  { path: 'post', loadChildren: () => import('../post/post.module').then(m => m.PostModule) },
  { path: 'car', loadChildren: () => import('../car/car.module').then(m => m.CarModule) },
  { path: 'wikipedia', loadChildren: () => import('../wikipedia/wikipedia.module').then(m => m.WikipediaModule) },
  { path: 'hero', loadChildren: () => import('../hero/hero.module').then(m => m.HeroModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
