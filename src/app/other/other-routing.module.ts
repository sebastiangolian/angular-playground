import { PhotoLazyLoadingComponent } from './pages/photo-lazy-loading/photo-lazy-loading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherComponent } from './pages/other/other.component';
import { TimerComponent } from './pages/timer/timer.component';
import { LeafletComponent } from './pages/leaflet/leaflet.component';
import { WikipediaComponent } from './pages/wikipedia/pages/wikipedia/wikipedia.component';

const routes: Routes = [
  { path: '', component: OtherComponent },
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
