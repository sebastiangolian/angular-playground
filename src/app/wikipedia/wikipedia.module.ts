import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikipediaRoutingModule } from './wikipedia-routing.module';
import { WikipediaComponent } from './pages/wikipedia/wikipedia.component';
import { FormsModule } from '@angular/forms';
import { WikipediaItemComponent } from './components/wikipedia-item/wikipedia-item.component';
import { WikipediaParseItemComponent } from './components/wikipedia-parse-item/wikipedia-parse-item.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    WikipediaComponent,
    WikipediaItemComponent,
    WikipediaParseItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WikipediaRoutingModule,
    SharedModule
  ]
})
export class WikipediaModule { }
