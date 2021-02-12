import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherComponent } from './pages/other/other.component';
import { TimerComponent } from './pages/timer/timer.component';

const routes: Routes = [
  { path: '', component: OtherComponent },
  { path: 'timer', component: TimerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
