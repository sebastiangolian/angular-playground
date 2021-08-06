/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormReactiveDynamicValidatorsComponent } from './pages/form-reactive-dynamic-validators/form-reactive-dynamic-validators.component';
import { FormReactiveTestComponent } from './pages/form-reactive-test/form-reactive-test.component';
import { LeafletComponent } from './pages/leaflet/leaflet.component';
import { OtherComponent } from './pages/other/other.component';
import { PhotoLazyLoadingComponent } from './pages/photo-lazy-loading/photo-lazy-loading.component';
import { TimerComponent } from './pages/timer/timer.component';
import { WikipediaComponent } from './pages/wikipedia/pages/wikipedia/wikipedia.component';

const routes: Routes = [
  { path: '', component: OtherComponent },
  { path: 'form-reactive', component: FormReactiveTestComponent },
  { path: 'form-reactive-dynamic-validators', component: FormReactiveDynamicValidatorsComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'photo-lazy-loading', component: PhotoLazyLoadingComponent },
  { path: 'leaflet', component: LeafletComponent },
  { path: 'wikipedia', component: WikipediaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherRoutingModule {}
