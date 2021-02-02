import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'car', loadChildren: () => import('../car/car.module').then(m => m.CarModule) },
  { path: 'post', loadChildren: () => import('../post/post.module').then(m => m.PostModule) },
  { path: 'user', loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
  { path: 'hero', loadChildren: () => import('../hero/hero.module').then(m => m.HeroModule) },
  { path: 'leaflet', loadChildren: () => import('../leaflet/leaflet.module').then(m => m.LeafletModule) },
  { path: 'wikipedia', loadChildren: () => import('../wikipedia/wikipedia.module').then(m => m.WikipediaModule) },
  { path: 'photo', loadChildren: () => import('../photo/photo.module').then(m => m.PhotoModule) },
  { path: 'jsonplaceholder', loadChildren: () => import('../jsonplaceholder/jsonplaceholder.module').then(m => m.JsonplaceholderModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
