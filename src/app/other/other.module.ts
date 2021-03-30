import { WikipediaParseItemComponent } from './pages/wikipedia/components/wikipedia-parse-item/wikipedia-parse-item.component';
import { WikipediaItemComponent } from './pages/wikipedia/components/wikipedia-item/wikipedia-item.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherRoutingModule } from './other-routing.module';
import { OtherComponent } from './pages/other/other.component';
import { TimerComponent } from './pages/timer/timer.component';
import { PhotoLazyLoadingComponent } from './pages/photo-lazy-loading/photo-lazy-loading.component';
import { LeafletComponent } from './pages/leaflet/leaflet.component';
import { WikipediaComponent } from './pages/wikipedia/pages/wikipedia/wikipedia.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OtherComponent,
    TimerComponent,
    PhotoLazyLoadingComponent,
    LeafletComponent,
    WikipediaComponent,
    WikipediaItemComponent,
    WikipediaParseItemComponent,
  ],
  imports: [CommonModule, FormsModule, OtherRoutingModule, SharedModule],
})
export class OtherModule {}
