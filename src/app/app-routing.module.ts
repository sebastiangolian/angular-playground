import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'post',
    loadChildren: './post/post.module#PostModule',
  },
  {
    path: 'car',
    loadChildren: './car/car.module#CarModule',
  },
  {
    path: 'product',
    loadChildren: './product/product.module#ProductModule',
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule',
  },
  {
    path: 'game',
    loadChildren: './game/game.module#GameModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  public routes: Routes;

  constructor() { 
    this.routes = routes;
  }
}
