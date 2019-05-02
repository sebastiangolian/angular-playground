import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { GameComponent } from './components/game/game.component';
import { GameObservableComponent } from './components/game-observable/game-observable.component';

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
    path: 'game',
    component: GameComponent
  },
  {
    path: 'game-observable',
    component: GameObservableComponent
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
